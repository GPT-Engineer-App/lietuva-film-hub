import React from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function Register() {
  return (
    <Box p={4}>
      <form>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Register
        </Button>
      </form>
    </Box>
  );
}

export default Register;
