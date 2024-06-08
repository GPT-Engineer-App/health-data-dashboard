import React from 'react';
import { useDrop } from 'react-dnd';
import { Box, Heading, VStack } from '@chakra-ui/react';
import Card from './Card';

const Column = ({ column, index, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => onDrop(item, column.id),
  });

  return (
    <Box ref={drop} bg="gray.100" p={4} borderRadius="md" shadow="md" width="300px">
      <Heading as="h3" size="md" mb={4}>{column.title}</Heading>
      <VStack spacing={4} minHeight="400px">
        {column.tasks.map((task, index) => (
          <Card key={task.id} task={task} index={index} />
        ))}
      </VStack>
    </Box>
  );
};

export default Column;