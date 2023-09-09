import './App.css';
import React, { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import {
  ChakraProvider,
  Box,
  Container,
  Image,
  extendTheme,
  CSSReset,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import Forecast from './components/forecast/forecast';

const theme = extendTheme({
  // Add Chakra UI theme customizations here if needed
});

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  // Calculate dynamic margin based on screen size
  const forecastMargin = useBreakpointValue({
    base: 4, // Margin for small screens
    md: -4, // Margin for medium and larger screens
  });

  return (
    <ChakraProvider theme={theme}>
      <Box className="app">
        <Box className="background-image-container">
          <Image className="background-image" src="icons/peakpx.jpg" alt="" />
        </Box>

        <Container maxW="100%">
          <Search onSearchChange={handleOnSearchChange} mb={4} />
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            {currentWeather && (
              <Box
                width={{ base: '100%', md: '62.5%' }}
                mt={{ base: 4, md: 12 }} // Adjust margin based on screen size
              >
                <CurrentWeather data={currentWeather} />
              </Box>
            )}
            {forecast && (
              <Box
                width={{ base: '100%', md: 'auto' }}
                mt={forecastMargin}
              >
                <Forecast data={forecast} />
              </Box>
            )}
          </Flex>
        </Container>
      </Box>
      <CSSReset />
    </ChakraProvider>
  );
}

export default App;
