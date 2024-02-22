import { Box, Text } from "@chakra-ui/react";

const PointsBalance = ({ balance }) => {
  return (
    <Box p={4} bg="brand.800" borderRadius="md">
      <Text>Jūsų taškų likutis: {balance}</Text>
    </Box>
  );
};

export default PointsBalance;
