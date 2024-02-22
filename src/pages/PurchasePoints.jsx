import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, VStack } from "@chakra-ui/react";
import { FaPaypal, FaCreditCard } from "react-icons/fa";

const PurchasePoints = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

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
          <Button leftIcon={<FaPaypal />} colorScheme="blue" onClick={() => handlePaymentMethodChange("paypal")}>
            Pay with PayPal
          </Button>
          <Button leftIcon={<FaCreditCard />} colorScheme="green" onClick={() => handlePaymentMethodChange("creditCard")}>
            Pay with Credit Card
          </Button>
          {paymentMethod === "paypal" && <Input placeholder="PayPal Email" mt={2} />}
          {paymentMethod === "creditCard" && (
            <VStack mt={2} spacing={2}>
              <Input placeholder="Credit Card Number" />
              <Input placeholder="Expiration Date" />
              <Input placeholder="CVC" />
            </VStack>
          )}
        </FormControl>
      </VStack>
    </Box>
  );
};

export default PurchasePoints;
