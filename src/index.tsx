import React from 'react';
import { createRoot } from 'react-dom/client';

import { GeoLocationProvider } from '@contexts/GeoLocationContext';
import { WeatherInfoProvider } from '@contexts/WeatherInfoContext';

import App from './App';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <GeoLocationProvider>
      <WeatherInfoProvider>
        <App />
      </WeatherInfoProvider>
    </GeoLocationProvider>
  </React.StrictMode>
);
