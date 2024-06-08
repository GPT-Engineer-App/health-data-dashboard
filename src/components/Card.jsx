import React from 'react';
import { useDrag } from 'react-dnd';
import { Box, Text } from '@chakra-ui/react';

const Card = ({ task, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id: task.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      bg="white"
      p={4}
      borderRadius="md"
      shadow="md"
      width="100%"
      opacity={isDragging ? 0.5 : 1}
    >
      <Text>{task.content}</Text>
    </Box>
  );
};

export default Card;