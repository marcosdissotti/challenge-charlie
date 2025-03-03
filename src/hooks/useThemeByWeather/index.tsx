import { useContext, useEffect, useMemo, useState } from 'react';
import { type DefaultTheme } from 'styled-components';

import { heatTheme } from '@styles/themes/heat';
import { coldTheme } from '@styles/themes/cold';
import { grayTheme } from '@styles/themes/grayTheme';
import { defaultTheme } from '@styles/themes/default';
import { WeatherInfoContext } from '@contexts/WeatherInfoContext';
import { GeoLocationContext } from '@contexts/GeoLocationContext';

interface ThemeByWeatherInterface {
  theme: DefaultTheme;
}

interface TemperatureVeluesInterface {
  heatMin: number;
  coldMax: number;
}

export default function useThemeByWeather(): ThemeByWeatherInterface {
  const [theme, setTheme] = useState(defaultTheme);

  const { geoLocation } = useContext(GeoLocationContext);
  const { weatherInfo } = useContext(WeatherInfoContext);

  const TemperatureVelues = useMemo<TemperatureVeluesInterface>(
    () => ({
      heatMin: 35,
      coldMax: 15
    }),
    []
  );

  useEffect(() => {
    changeThemeByWeatherTemperature();
  }, [geoLocation, weatherInfo]);

  const changeThemeByWeatherTemperature = (): void => {
    if (!weatherInfo.current || geoLocation.locationName === undefined || geoLocation.locationName === '') {
      setTheme(grayTheme);
      return;
    }

    if (weatherInfo?.current?.temp > TemperatureVelues.heatMin) {
      setTheme(heatTheme);
      return;
    }

    if (weatherInfo?.current?.temp < TemperatureVelues.coldMax) {
      setTheme(coldTheme);
      return;
    }

    setTheme(defaultTheme);
  };

  return {
    theme
  };
}
