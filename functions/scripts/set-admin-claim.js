/* eslint-disable no-console */
const admin = require("firebase-admin");

/**
 * Sets or removes the `admin` custom claim for a Firebase Auth user.
 */
async function main() {
  const email = process.argv[2];
  const mode = process.argv[3] || "grant";

  if (!email) {
    console.error(
        "Usage: node scripts/set-admin-claim.js <email> [grant|revoke]",
    );
    process.exit(1);
  }

  if (!["grant", "revoke"].includes(mode)) {
    console.error("Mode must be either 'grant' or 'revoke'.");
    process.exit(1);
  }

  admin.initializeApp();

  const user = await admin.auth().getUserByEmail(email);
  const claims = user.customClaims || {};

  if (mode === "grant") {
    claims.admin = true;
  } else {
    delete claims.admin;
  }

  await admin.auth().setCustomUserClaims(user.uid, claims);
  await admin.auth().revokeRefreshTokens(user.uid);

  console.log(`Admin claim ${mode}ed for ${email} (uid: ${user.uid}).`);
  console.log(
      "User must sign out/sign in again for new claim to be reflected.",
  );
}

main().catch((error) => {
  console.error("Failed to update admin claim:", error.message || error);
  process.exit(1);
});
