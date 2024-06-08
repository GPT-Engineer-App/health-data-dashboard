import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Flex } from '@chakra-ui/react';
import Column from './Column';

const Board = ({ columns, onDrop }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Flex>
        {columns.map((column, index) => (
          <Box key={column.id} p={4}>
            <Column column={column} index={index} onDrop={onDrop} />
          </Box>
        ))}
      </Flex>
    </DndProvider>
  );
};

export default Board;