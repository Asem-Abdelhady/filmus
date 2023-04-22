import {
  Image,
  Box,
  Text,
  Divider,
  Wrap,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ProfileButton from "./ProfileButton";
import DefaultButton from "../../Common/DefaultButton";
import { logo } from "../../../assets";
import { Link } from "react-router-dom";

// TODO : set name, surname and proper profile picture to @ProfileButton

const Navbar = () => {
  return (
    <VStack w="100%">
      <HStack w="100%">
        <Box padding={5}>
          <Image htmlWidth={175} src={logo} alt="Filmus logo" />
        </Box>
        <Wrap w="100%" spacing={4} justify="right" padding={5}>
          <Link to="/filmus">
            <DefaultButton text={"Home"} />
          </Link>
          <Link to="/filmus/movies">
            <DefaultButton text={"Movies"} />
          </Link>
          <Link to="/filmus/personal">
            <DefaultButton text={"Personal"} />
          </Link>
          <ProfileButton imageUrl="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" />
        </Wrap>
      </HStack>
      <Divider />
    </VStack>
  );
};

export default Navbar;
