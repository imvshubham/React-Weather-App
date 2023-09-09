import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";

const Clock = () => {
  const d = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  const [isSmallScreen] = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint as needed

  return (
    <Center>
      {isSmallScreen ? (
        <VStack spacing={4} color="white">
          <Text fontSize={{ base: "2xl", md: "40px" }} fontWeight="bold">
            {day}
          </Text>
          <HStack>
            <Text
              className="dates"
              fontSize={{ base: "50px", md: "60px" }}
              fontWeight="800"
              color="rgb(238, 83, 69)"
            >
              {date}
            </Text>
            <Box>
              <Text fontSize="lg">{month}</Text>
              <Text fontSize="lg">{year}</Text>
            </Box>
          </HStack>
        </VStack>
      ) : (
        <HStack spacing={4} color="white">
          <Text fontSize={{ base: "2xl", md: "40px" }} fontWeight="bold">
            {day}
          </Text>
          <Text
            className="dates"
            fontSize={{ base: "50px", md: "60px" }}
            fontWeight="800"
            color="rgb(238, 83, 69)"
          >
            {date}
          </Text>
          <Box>
            <Text fontSize="lg">{month}</Text>
            <Text fontSize="lg">{year}</Text>
          </Box>
        </HStack>
      )}
    </Center>
  );
};

export default Clock;
