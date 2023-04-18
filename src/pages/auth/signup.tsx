import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // handle signup logic here
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="md" w="50%" m="auto" mt="20">
      <Heading mb={6}>Sign up</Heading>
      <form onSubmit={handleSignup}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Email address</FormLabel>  
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Sign up
          </Button>
        </Stack>
      </form>
      <Text mt={4} color={useColorModeValue("gray.600", "gray.300")}>
        Already have an account?{" "}
        <Link href="/filmus/login">
        <Box as="span" color="blue.500">
          Login
        </Box>
        </Link>
        {" "}
        now.
      </Text>
    </Box>
  );
};

export default Signup;