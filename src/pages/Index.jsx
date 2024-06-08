import { Container, Text, VStack, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Index = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Fitbit Steps',
        data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Strava Distance',
        data: [5, 10, 15, 20, 25, 30, 35],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Health Data Overview',
      },
    },
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Health Dashboard</Heading>
        <Text fontSize="lg">Overview of your health data from various wearables.</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="md" mb={4}>Fitbit Steps</Heading>
            <Line data={data} options={options} />
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="md" mb={4}>Strava Distance</Heading>
            <Line data={data} options={options} />
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;