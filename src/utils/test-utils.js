import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PricingProvider } from '../contexts/PricingContext';
import { AdminProvider } from '../contexts/AdminContext';

// Custom render function that includes all providers
export const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <AdminProvider>
        <PricingProvider>
          {ui}
        </PricingProvider>
      </AdminProvider>
    </BrowserRouter>
  );
};

// Re-export everything from @testing-library/react
export * from '@testing-library/react';