import React from "react";
import { Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, VStack } from "@chakra-ui/react";
import { FaPaypal, FaCreditCard } from "react-icons/fa";

const PurchasePoints = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="flex-start">
        <FormControl id="amount">
          <FormLabel>Amount of Points</FormLabel>
          <NumberInput min={1}>
            <NumberInputField placeholder="Enter amount of points" />
          </NumberInput>
        </FormControl>
        <FormControl id="payment-method">
          <FormLabel>Payment Method</FormLabel>
          <Button leftIcon={<FaPaypal />} colorScheme="blue">
            Pay with PayPal
          </Button>
          <Button leftIcon={<FaCreditCard />} colorScheme="green">
            Pay with Credit Card
          </Button>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default PurchasePoints;
