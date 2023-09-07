import React from 'react';
import { Box, Text, HStack, Center } from '@chakra-ui/react';

const Clock = () => {
  const d = new Date();
  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <Center>
      <HStack spacing={4} color="white">
      <Text fontSize="25px" fontWeight="bold">{day}</Text>
        <Text 
          className="dates" 
          fontSize="60px" 
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
    </Center>
  );
};

export default Clock;
