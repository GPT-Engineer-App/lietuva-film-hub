import { Box, Container, Heading, SimpleGrid, Image, Text, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaPaypal, FaCreditCard, FaPlay } from "react-icons/fa";

const films = [
  // Dummy film data - replace with actual data
  {
    title: "Film Title 1",
    cover: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3B1bGFyJTIwbW92aWUlMjBjb3ZlcnxlbnwwfHx8fDE3MDg2MjA1NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    title: "Film Title 2",
    cover: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwb3B1bGFyJTIwbW92aWUlMjBjb3ZlcnxlbnwwfHx8fDE3MDg2MjA1NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  // Add more films here
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Heading as="h1" my={8}>
        Žiūrėkite filmus lietuviškai
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {films.map((film, index) => (
          <Box key={index} boxShadow="md" borderRadius="lg" overflow="hidden">
            <Image src={film.cover} alt={film.title} />
            <VStack p={5} align="stretch" spacing={3}>
              <Heading as="h3" size="md">
                {film.title}
              </Heading>
              <HStack justify="space-between">
                <Button leftIcon={<Icon as={FaPlay} />}>Žiūrėti</Button>
                <Button colorScheme="blue" leftIcon={<Icon as={FaPaypal} />}>
                  Pirkti taškus
                </Button>
                <Button colorScheme="green" leftIcon={<Icon as={FaCreditCard} />}>
                  Pirkti taškus
                </Button>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
      <Text textAlign="center" color="gray.600" my={10}>
        Svetainės kūrėjas Tomas Juodiška
      </Text>
    </Container>
  );
};

export default Index;
