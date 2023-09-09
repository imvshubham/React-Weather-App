import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import Clock from "../clock/clock";

const CurrentWeather = ({ data }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleToCelsius = () => {
    if (!isCelsius) {
      setIsCelsius(true);
    }
  };

  const toggleToFahrenheit = () => {
    if (isCelsius) {
      setIsCelsius(false);
    }
  };

  const convertToCelsius = (temperature) => {
    return Math.round(temperature);
  };

  const convertToFahrenheit = (temperature) => {
    return Math.round((temperature * 9) / 5 + 32);
  };

  const getTemperature = () => {
    const temperature = data.main.temp;
    if (isCelsius) {
      return `${convertToCelsius(temperature)}°C`;
    } else {
      return `${convertToFahrenheit(temperature)}°F`;
    }
  };

  const buttonContainerStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
  };

  const imageContainerStyle = {
    position: "absolute",
    top: "10px",
    right: "20px",
  };

  const cityContainerStyle = {
    position: "absolute",
    top: "60%",
    right: "45%",
    transform: "translate(50%, -50%)",
  };
  const dateContainerStyle = {
    position: "absolute",
    top: "30%",
    right: "45%",
    transform: "translate(30%, -50%)",
  };

  const leftSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: { base: "0", md: "4" },
    position: "relative",
    width: "100%",
  };

  return (
    <Center>
      <Box
        className="weather"
        bg="rgba(0, 0, 0, 0.6)"
        borderRadius="7px"
        color="white"
        margin={{ base: "55px auto 0 auto", md: "30px auto 0 auto" }}
        padding="20px"
        boxShadow="0px 2px 20px 2px rgba(0, 0, 0, 0.6)"
        w={{ base: "100%", md: "100%" }}
        h="600px"
        position="relative"
      >
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }}
        >
          {/* Left section */}
          <VStack
            spacing={20}
            alignItems="flex-start"
            style={leftSectionStyle}
          >
            <Box w="100%" marginTop="40px">
              <Text fontWeight="bold" fontSize="xl" fontStyle="italic">
                Feels like
              </Text>
              <Text fontSize="lg">
                {isCelsius
                  ? `${convertToCelsius(data.main.feels_like)}°C`
                  : `${convertToFahrenheit(data.main.feels_like)}°F`}
              </Text>
            </Box>
            <Box w="100%">
              <Text fontWeight="bold" fontSize="xl" fontStyle="italic">
                Wind
              </Text>
              <Text fontSize="lg">{data.wind.speed} m/s</Text>
            </Box>
            <Box w="100%">
              <Text fontWeight="bold" fontSize="xl" fontStyle="italic">
                Humidity
              </Text>
              <Text fontSize="lg">{data.main.humidity}%</Text>
            </Box>
            <Box w="100%">
              <Text fontWeight="bold" fontSize="xl" fontStyle="italic">
                Pressure
              </Text>
              <Text fontSize="lg">{data.main.pressure} hPa</Text>
            </Box>
          </VStack>
          {/* adding date */}
          <HStack align="flex-start" spacing={4} style={dateContainerStyle}>
            <Clock />
          </HStack>

          {/* Button container */}
          <HStack align="flex-start" spacing={1} style={buttonContainerStyle}>
            <Button
              type="button"
              onClick={toggleToCelsius}
              size="sm"
              variant={isCelsius ? "solid" : "outline"}
              fontSize="40px"
              border="none"
              colorScheme="whiteAlpha"
              _hover={{ color: "rgb(238, 83, 69)" }}
            >
              C
            </Button>
            <Button
              type="button"
              onClick={toggleToFahrenheit}
              size="sm"
              border="none"
              variant={!isCelsius ? "solid" : "outline"}
              fontSize="40px"
              colorScheme="whiteAlpha"
              _hover={{ color: "rgb(238, 83, 69)" }}
            >
              F
            </Button>
          </HStack>
          {/* Right section */}
          <Spacer />
          {/* Image and Description Container */}
          <VStack align="flex-start" spacing={4} style={imageContainerStyle}>
            <Box
              position="relative"
              textAlign="right"
              top="0px"
            >
              <Flex flexDirection="column" alignItems="center">
                <Image
                  alt="weather"
                  className="weather-icon"
                  src={`icons/${data.weather[0].icon}.png`}
                  boxSize={{ base: "60px", md: "80px" }}
                />
              </Flex>
            </Box>
            <Box position="relative" textAlign="right" top="0" right="0">
              <Text
                className="weather-description"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="light"
              >
                {data.weather[0].description}
              </Text>
            </Box>
          </VStack>

          <VStack align="flex-start" spacing={4} style={cityContainerStyle}>
            {/* Temperature Container */}
            <Box className="temperature">
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
                {getTemperature()}
              </Text>
            </Box>

            {/* City Container */}
            <Text className="city" fontSize={{ base: "2xl", md: "5xl" }}>
              {data.city}
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Center>
  );
};

export default CurrentWeather;
