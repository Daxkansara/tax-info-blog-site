
    import React, { Suspense } from 'react';
    import ReactDOM from 'react-dom/client';
    import App from '@/App';
    import '@/index.css';
    import '@/i18n'; // Import the i18n configuration

    // Basic loading fallback
    const loadingMarkup = (
      <div className="py-4 text-center">
        <div>Loading...</div>
      </div>
    );

    ReactDOM.createRoot(document.getElementById('root')).render(
      <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Suspense>
    );
  