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
          <Button leftIcon={<FaPaypal />} colorScheme="blue" variant={paymentMethod === "paypal" ? "solid" : "outline"} onClick={() => handlePaymentMethodChange("paypal")} mb={2}>
            Pay with PayPal
          </Button>
          <Button leftIcon={<FaCreditCard />} colorScheme="green" variant={paymentMethod === "creditCard" ? "solid" : "outline"} onClick={() => handlePaymentMethodChange("creditCard")}>
            Pay with Credit Card
          </Button>
          <Button mt={4} colorScheme="blue" onClick={handlePurchase} isDisabled={paymentMethod === "" || pointsToPurchase <= 0}>
            Buy Points
          </Button>
          {paymentMethod === "paypal" && <Input placeholder="PayPal Email" mt={2} />}
          {paymentMethod === "creditCard" && (
            <VStack mt={2} spacing={2}>
              <Input placeholder="Credit Card Number" />
              <Input placeholder="Expiration Date" />
              <Input placeholder="CVC" />
            </VStack>
          )}
          // Removed the redundant display of Total Price here as it's already displayed above.
        </FormControl>
        // The redundant 'amount' FormControl has been removed as it was duplicated above. // Removed the redundant 'purchase' FormControl which was not part of the original component design.
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
