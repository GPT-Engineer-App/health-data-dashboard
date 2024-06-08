import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex align="center">
        <Heading as="h1" size="lg">Health Tracker</Heading>
        <Spacer />
        <Link to="/">
          <Button colorScheme="teal" variant="outline" mr={4}>Dashboard</Button>
        </Link>
        <Link to="/board">
          <Button colorScheme="teal" variant="outline">Follow-Up Board</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;