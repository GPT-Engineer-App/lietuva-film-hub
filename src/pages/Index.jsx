import { Box, Container, Heading, SimpleGrid, Image, Text, Button, VStack, HStack, Icon, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPaypal, FaCreditCard, FaPlay } from "react-icons/fa";
import { useState } from "react";
import PointsBalance from "./PointsBalance";

// Adjusting films array to include a points cost for each film
const films = [
  // ... existing films with points cost added
  {
    title: "The Grand Budapest Hotel",
    cover: "https://images.unsplash.com/photo-1568707043650-eb03f2536825?ixlib=rb-1.2.1&q=80&w=1080",
    pointsCost: Math.floor(Math.random() * 15) + 1, // Random cost between 1 and 15
  },
  // ... other realistic movie titles and covers with points cost added
  {
    title: "Inception",
    cover: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&q=80&w=1080",
  },
  // ... more realistic movie titles and covers up to "Film Title 40"
  {
    title: "Interstellar",
    cover: "https://images.unsplash.com/photo-1588931356646-345511ea95b9?ixlib=rb-1.2.1&q=80&w=1080",
  },
  // ... more new film entries up to "Film Title 45"
  // Added new film entries with placeholder images
  {
    title: "Karate Kid",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-KARATE?ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "The Maze Runner",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-MAZE?ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Death App",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-DEATHAPP?ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "The Medallion",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-MEDALLION?ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Blade Runner",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-BLADE?ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Crocodile Dundee",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-CROCODILE?ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Lara Croft: Tomb Raider",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-LARA?ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Additional movies added at discretion
  {
    title: "Space Odyssey",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-SPACE?ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "The Matrix",
    cover: "https://images.unsplash.com/photo-UNIQUE-ID-MATRIX?ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const toast = useToast();
  // Remove the duplicated imports since they have been declared at the top of the file
  return (
    <Container maxW="container.xl" bg="brand.900" color="white">
      <Heading as="h1" my={8} color="primary.500">
        Žiūrėkite filmus lietuviškai
      </Heading>
      <PointsBalance balance={points} />
      <SimpleGrid columns={[1, 2, 3]} spacing={10} paddingBottom={10}>
        {films.map((film, index) => (
          <Box key={index} boxShadow="md" borderRadius="lg" overflow="hidden">
            <Image src={film.cover} alt={film.title} />
            <VStack p={5} align="stretch" spacing={3}>
              <Heading as="h3" size="md">
                {film.title}
              </Heading>
              <HStack justify="space-between">
                <Button colorScheme="secondary" leftIcon={<Icon as={FaPlay} />} variant="solid" onClick={() => handleWatchFilm(film, points, setPoints, setSelectedFilm, toast)}>
                  Žiūrėti
                </Button>
                <Button colorScheme="primary" leftIcon={<Icon as={FaPaypal} />} onClick={() => navigate("/purchase-points")} variant="solid">
                  Pirkti taškus
                </Button>
                <Button colorScheme="primary" leftIcon={<Icon as={FaCreditCard} />} onClick={() => navigate("/purchase-points")} variant="solid">
                  Pirkti taškus
                </Button>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
      {selectedFilm && (
        // Simulated modal or similar component to represent watching a film
        <Box bg="brand.700" p={4} rounded="md" shadow="lg" position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Heading as="h2" size="lg" mb={4}>
            Watching: {selectedFilm.title}
          </Heading>
          {/* Placeholder for video player */}
          <Box bg="black" height="360px" width="640px"></Box>
          <Button mt={4} colorScheme="red" onClick={() => setSelectedFilm(null)}>
            Close
          </Button>
        </Box>
      )}
      <Text textAlign="center" color="gray.400" my={10}>
        Svetainės kūrėjas Tomas Juodiška
      </Text>
    </Container>
  );
};

// Function to handle watching a film
function handleWatchFilm(film, points, setPoints, setSelectedFilm, toast) {
  if (points >= film.pointsCost) {
    setPoints((prevPoints) => prevPoints - film.pointsCost);
    setSelectedFilm(film);
  } else {
    toast({
      title: "Not enough points",
      description: "You do not have enough points to watch this film.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }
  // Pass the state and state setters as arguments to the handleWatchFilm function
}

export default Index;
