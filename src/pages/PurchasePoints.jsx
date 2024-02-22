import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, VStack } from "@chakra-ui/react";
import { FaPaypal, FaCreditCard } from "react-icons/fa";

import { useToast } from "@chakra-ui/react";

const pointPrice = 0.02;
const discountThreshold = 100;
const discountRate = 0.3;

const PurchasePoints = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [pointsToPurchase, setPointsToPurchase] = useState(0);
  const toast = useToast();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="flex-start">
        <FormControl id="amount">
          <FormLabel>Amount of Points</FormLabel>
          <NumberInput min={1} onChange={(valueString) => setPointsToPurchase(parseInt(valueString))}>
            <NumberInputField placeholder="Enter amount of points" />
          </NumberInput>
          <Text mt={4}>Total Price: €{calculateTotalPrice(pointsToPurchase).toFixed(2)}</Text>
        </FormControl>
        <FormControl id="payment-method">
          <FormLabel>Payment Method</FormLabel>
          <Button leftIcon={<FaPaypal />} colorScheme="blue" onClick={() => handlePaymentMethodChange("paypal")}>
            Pay with PayPal
          </Button>
          <Button leftIcon={<FaCreditCard />} colorScheme="green" onClick={() => handlePaymentMethodChange("creditCard")} mt={2}>
            Pay with Credit Card
          </Button>
          <FormControl mt={4}>
            <Button colorScheme="blue" onClick={handlePurchase} isDisabled={paymentMethod === "" || pointsToPurchase <= 0}>
              Buy Points
            </Button>
          </FormControl>
          {paymentMethod === "paypal" && <Input placeholder="PayPal Email" mt={2} />}
          {paymentMethod === "creditCard" && (
            <>
              <VStack mt={2} spacing={2}>
                <Input placeholder="Credit Card Number" />
                <Input placeholder="Expiration Date" />
                <Input placeholder="CVC" />
              </VStack>
              <Text mt={4}>Total Price: €{calculateTotalPrice(pointsToPurchase).toFixed(2)}</Text>
            </>
          )}
        </FormControl>
        <FormControl id="amount">
          <FormLabel>Amount of Points</FormLabel>
          <NumberInput min={1} onChange={(value) => setPointsToPurchase(parseInt(value))}>
            <NumberInputField placeholder="Enter amount of points" />
          </NumberInput>
        </FormControl>
        // ... rest of the component
        <FormControl id="purchase">
          <Button colorScheme="teal" onClick={handlePurchase}>
            Pirkti taškus
          </Button>
        </FormControl>
      </VStack>
    </Box>
  );

  function calculateTotalPrice(points) {
    let totalPrice = points * pointPrice;
    if (points >= discountThreshold) {
      totalPrice -= totalPrice * discountRate;
    }
    return totalPrice;
  }

  // The handlePurchase function should now simulate a payment transaction
  // and should only be successful if a valid payment method is selected
  // and the points are actually purchased (not free).
  function handlePurchase() {
    // Assume a backend API call to process payment and update the user's points balance
    // Since this is a simulation, we simply display a success message if the criteria are met
    if (paymentMethod === "" || pointsToPurchase <= 0) {
      toast({
        title: "Payment error",
        description: "Please select a payment method and enter the amount of points to purchase.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // Simulate a successful payment
      toast({
        title: "Payment successful",
        description: `You have purchased ${pointsToPurchase} points for €${calculateTotalPrice(pointsToPurchase).toFixed(2)}. Thank you for your purchase!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // This would be the place to update the user's points balance after a successful transaction
      // For the purpose of this simulation, we will not perform any actual balance update
    }
  }
};

export default PurchasePoints;
