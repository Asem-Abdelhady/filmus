import React, { FormEvent, useState } from "react";
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
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { redirect } from "react-router-dom";

import ILoginResponse from "../../interfaces/LoginResponse";

interface IProps {
  setToken: (userToken: { token: string }) => void;
  setUserId: (userId: { userId: string }) => void;
}
const Login = (props: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const body = {
    email: email,
    password: password,
  };
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post<ILoginResponse>(
      `${BASE_URL}/users/login`,
      body
    );
    props.setToken({ token: res.data.access_token });
    props.setUserId({ userId: res.data._id });
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="md" w="50%" m="auto" mt="28">
      <Heading mb={6}>Login</Heading>
      <form onSubmit={handleLogin}>
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
          <Button type="submit" colorScheme="teal">
            Login
          </Button>
        </Stack>
      </form>
      <Text mt={4} color={useColorModeValue("gray.600", "gray.300")}>
        Don't have an account?{" "}
        <Link href="/filmus/signup">
          <Box as="span" color="blue.500">
            Sign up
          </Box>
        </Link>{" "}
        now.
      </Text>
    </Box>
  );
};

export default Login;