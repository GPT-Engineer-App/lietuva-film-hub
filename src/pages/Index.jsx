import { Box, Container, Heading, SimpleGrid, Image, Text, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaPaypal, FaCreditCard, FaPlay } from "react-icons/fa";

const films = [
  // ... existing films
  {
    title: "The Grand Budapest Hotel",
    cover: "https://images.unsplash.com/photo-1568707043650-eb03f2536825?ixlib=rb-1.2.1&q=80&w=1080",
  },
  // ... other realistic movie titles and covers
  {
    title: "Inception",
    cover: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&q=80&w=1080",
  },
  // ... more realistic movie titles and covers up to "Film Title 40"
  {
    title: "Interstellar",
    cover: "https://images.unsplash.com/photo-1588931356646-345511ea95b9?ixlib=rb-1.2.1&q=80&w=1080",
  },
  // ... more new film entries up to "Film Title 40"
  {
    title: "Film Title 40",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-40?ixlib=rb-4.0.3&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw2fHxmdWxsJTIwbWovZWlzdHJhaW5pbmclMjBjb3ZlcnxlbnwwfHx8fDE2NzY5NzAzNzI&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" bg="brand.900" color="white">
      <Heading as="h1" my={8} color="primary.500">
        Žiūrėkite filmus lietuviškai
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} paddingBottom={10}>
        {films.map((film, index) => (
          <Box key={index} boxShadow="md" borderRadius="lg" overflow="hidden">
            <Image src={film.cover} alt={film.title} />
            <VStack p={5} align="stretch" spacing={3}>
              <Heading as="h3" size="md">
                {film.title}
              </Heading>
              <HStack justify="space-between">
                <Button colorScheme="secondary" leftIcon={<Icon as={FaPlay} />} variant="solid">
                  Žiūrėti
                </Button>
                <Button colorScheme="primary" leftIcon={<Icon as={FaPaypal} />} data-email="sender.lithuania@gmail.com" variant="solid">
                  Pirkti taškus
                </Button>
                <Button colorScheme="primary" leftIcon={<Icon as={FaCreditCard} />} data-bank="LT727044090101171110" variant="solid">
                  Pirkti taškus
                </Button>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
      <Text textAlign="center" color="gray.400" my={10}>
        Svetainės kūrėjas Tomas Juodiška
      </Text>
    </Container>
  );
};

export default Index;
