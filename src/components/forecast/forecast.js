import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ data }) => {
  const currentDayIndex = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(currentDayIndex + 1).concat(
    WEEK_DAYS.slice(0, currentDayIndex + 1)
  );

  return (
    <Box className="detail-box" marginLeft="1px">
      <HStack>
        <Text
          fontSize="29px"
          fontWeight="bold"
          color="white"
          marginBottom="6px"
          marginTop={"20px"}
          marginRight="390px"
          borderBottom="#eee7e7"
          paddingBottom="8px"
          position={"relative"}
        >
          Details
        </Text>
      </HStack>
      <style>
        {`
          /* Remove horizontal line between accordion buttons */
          .chakra-accordion-button {
            border: none;
          }
        `}
      </style>
      <Accordion allowToggle>
        {data.list.slice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionButton
                _expanded={{ fontSize: "14px", padding: "6px 15px" }} // Styles for expanded state
                _focus={{ boxShadow: "none" }} // Remove focus border
                fontSize={{ base: "8px", sm: "14px" }} // Responsive font size
                padding={{ base: "5px 12px", sm: "7px 18px" }} 
                position={"relative"}
              >
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  w="100%"
                  className="daily-item"
                  backgroundColor="rgba(0, 0, 0, 0.2)"
                  borderRadius="15px"
                  height="50px"
                  margin="2px"
                  cursor="pointer"
                  _hover={{ bg: "rgba(0, 0, 0, 0.5)" }} // Styles for hover state
                  fontSize={{ base: "12px", sm: "14px" }} 
                  transition="background-color 0.3s"
                  position={"relative"}

                >
                  <Image
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                    boxSize={{ base: "30px", sm: "40px" }}
                    width="40px"
                    position={"relative"}
                  />
                  <Text
                    fontWeight="normal"
                    fontSize={{ base: "sm", sm: "md" }}
                    color="white"
                    flex="1 0 auto"
                    marginLeft="15px"
                    fontStyle="normal"
                  >
                    {forecastDays[idx]}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", sm: "md" }}
                    color="white"
                    flex="2 0 auto"
                    marginRight={{ base: "12px", sm: "15px" }} // Responsive margin
                    textAlign="right"
                    marginLeft={{ base: "22px", sm: "110px" }} // Responsive margin
                  >
                    {item.weather[0].description}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", sm: "md" }}
                    color="white"
                    textAlign="right"
                    flex="0 0 auto"
                    marginLeft="10px"
                  >
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <VStack spacing={1} fontSize={17} position={"relative"}>
                  <Flex
                    justifyContent="space-between"
                    w="100%"
                    className="daily-details-grid"
                  >
                    <Text color="white" >Pressure:</Text>
                    <Text color="white" >{item.main.pressure} hPa</Text>
                    <Text color="white" marginLeft="20px">
                      Humidity:
                    </Text>
                    <Text color="white" >{item.main.humidity}%</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    w="100%"
                    className="daily-details-grid"
                  
                  >
                    <Text color="white" >Clouds:</Text>
                    <Text color="white">{item.clouds.all}%</Text>
                    <Text color="white" marginLeft="20px">
                      Windspeed:
                    </Text>
                    <Text color="white" >{item.wind.speed}m/s</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    w="100%"
                    className="daily-details-grid"
                    
                  >
                    <Text color="white">Sea level:</Text>
                    <Text color="white">{item.main.sea_level}m</Text>
                    <Text marginLeft="20px" color="white">
                      Feels like:
                    </Text>
                    <Text color="white">
                      {Math.round(item.main.feels_like)}°C
                    </Text>
                  </Flex>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Forecast;
