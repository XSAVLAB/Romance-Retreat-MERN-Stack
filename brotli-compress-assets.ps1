# PowerShell script to Brotli-compress all JS, CSS, and image assets in build output
# Usage: Run in project root after npm run build

$brotliPath = "$env:USERPROFILE\AppData\Roaming\npm\brotli.exe"

if (!(Test-Path $brotliPath)) {
    Write-Host "Brotli executable not found at $brotliPath. Please check your npm global install."
    exit 1
}

$folders = @(
    "build/static/js",
    "build/static/css",
    "build/static/media"
)
$extensions = @("*.js", "*.css", "*.webp", "*.png", "*.jpg", "*.svg")

foreach ($folder in $folders) {
    foreach ($ext in $extensions) {
        $files = Get-ChildItem -Path $folder -Filter $ext -File -ErrorAction SilentlyContinue
        foreach ($file in $files) {
            Write-Host "Compressing $($file.FullName)"
            & $brotliPath $file.FullName
        }
    }
}

Write-Host "Brotli compression complete."
