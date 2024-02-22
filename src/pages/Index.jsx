import { Box, Container, Heading, SimpleGrid, Image, Text, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaPaypal, FaCreditCard, FaPlay } from "react-icons/fa";

const films = [
  {
    title: "Didysis Gatsby",
    cover: "https://images.unsplash.com/photo-1589992896544-246f6ca2df3b?ixlib=rb-4.0.3&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdWxsJTIwbW92aWUlMjBjb3ZlcnxlbnwwfHx8fDE2NzY5NzAzNzI&q=80&w=1080",
  },
  {
    title: "Paslapčių knyga",
    cover: "https://images.unsplash.com/photo-1633113087661-7b159c8e6ee0?ixlib=rb-4.0.3&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxmdWxsJTIwbW92aWUlMjBjb3ZlcnxlbnwwfHx8fDE2NzY5NzAzNzI&q=80&w=1080",
  },
  {
    title: "Nakties sargyba",
    cover: "https://images.unsplash.com/photo-1621944174241-7a45d58a3b2a?ixlib=rb-4.0.3&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxmdWxsJTIwbW92aWUlMjBjb3ZlcnxlbnwwfHx8fDE2NzY5NzAzNzI&q=80&w=1080",
  },
  {
    title: "Vilkų sodas",
    cover: "https://images.unsplash.com/photo-1603415525373-8fa40e3a5753?ixlib=rb-4.0.3&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxmdWxsJTIwbW92aWUlMjBjb3ZlcnxlbnwwfHx8fDE2NzY5NzAzNzI&q=80&w=1080",
  },
  {
    title: "Mergina ir drakonas",
    cover: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.0.3&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw2fHxmdWxsJTIwbW92aWUlMjBjb3ZlcnxlbnwwfHx8fDE2NzY5NzAzNzI&q=80&w=1080",
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
