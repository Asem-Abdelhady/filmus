import React, { FormEvent, useState } from "react";
import {
  HStack,
  Image,
  Text,
  VStack,
  Stack,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL, unavailable, img_500 } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import ILoginResponse from "../../interfaces/LoginResponse";
import IRegisterData from "../../interfaces/RegisterData";

import IUser from "../../../backend/types/UserTypes";

const Profile = () => {
  const userId = localStorage.getItem("userId");
  const URL = `${BASE_URL}/users/${userId}`;

  const email_ = localStorage.getItem("email");
  const username = localStorage.getItem("userName");
  const isadmin = localStorage.getItem("isAdmin");
  
  const [email, setEmail] = useState<string>(email_);
  const [userName, setUserName] = useState<string>(username);
  const [isAdmin, setIsAdmin] = useState<string>(isadmin);
  
  /*const body: IRegisterData = {
    email: email,
    username: userName,
    isAdmin: isAdmin,
  };*/
  
  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.put<ILoginResponse>(URL, body);
  };

  return (
    <HStack boxShadow="md" borderRadius="md" w="50%" m="auto" mt="28" p={5} spacing={5}>
      <Image
        boxSize='250px'
        objectFit='cover'
        borderRadius="15px"
        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        alt={userName}
      />
      <VStack >
        <Text
          w={"100%"}
          fontSize="xx-large"
          fontFamily="Work sans"
          fontWeight={"bold"}
        >
          Hello, {userName}!
        </Text>
        <form style={{width:"100%"}} onSubmit={handleSave}>
          <Stack w={"100%"} spacing={3}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Save
            </Button>
          </Stack>
        </form>
      </VStack>
    </HStack>
  );
};

export default Profile;
