import React, { useState } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import Board from '../components/Board';

const initialData = {
  columns: [
    {
      id: 'column-1',
      title: 'To Do',
      tasks: [
        { id: 'task-1', content: 'Follow up with Dr. Smith' },
        { id: 'task-2', content: 'Schedule blood test' },
      ],
    },
    {
      id: 'column-2',
      title: 'In Progress',
      tasks: [
        { id: 'task-3', content: 'Consultation with Dr. Brown' },
      ],
    },
    {
      id: 'column-3',
      title: 'Completed',
      tasks: [
        { id: 'task-4', content: 'Annual physical exam' },
      ],
    },
  ],
};

const BoardPage = () => {
  const [columns, setColumns] = useState(initialData.columns);

  const onDrop = (item, columnId) => {
    const sourceColumn = columns.find(column => column.tasks.some(task => task.id === item.id));
    const destinationColumn = columns.find(column => column.id === columnId);

    const sourceTasks = Array.from(sourceColumn.tasks);
    const [movedTask] = sourceTasks.splice(item.index, 1);

    if (sourceColumn.id === destinationColumn.id) {
      sourceTasks.splice(item.index, 0, movedTask);
      const newColumn = {
        ...sourceColumn,
        tasks: sourceTasks,
      };
      const newColumns = columns.map(column => column.id === newColumn.id ? newColumn : column);
      setColumns(newColumns);
    } else {
      const destinationTasks = Array.from(destinationColumn.tasks);
      destinationTasks.splice(item.index, 0, movedTask);

      const newSourceColumn = {
        ...sourceColumn,
        tasks: sourceTasks,
      };

      const newDestinationColumn = {
        ...destinationColumn,
        tasks: destinationTasks,
      };

      const newColumns = columns.map(column => {
        if (column.id === newSourceColumn.id) {
          return newSourceColumn;
        } else if (column.id === newDestinationColumn.id) {
          return newDestinationColumn;
        } else {
          return column;
        }
      });

      setColumns(newColumns);
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={8}>Patient Follow-Up Board</Heading>
      <Board columns={columns} onDrop={onDrop} />
    </Container>
  );
};

export default BoardPage;