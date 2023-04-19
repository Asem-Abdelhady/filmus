import {
  Text,
  HStack,
  VStack,
  IconButton,
  Box,
  Wrap,
  WrapItem,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";

import DefaultButton from "../../../Common/DefaultButton";

import { BASE_URL, img_300, unavailable } from "../../../../config/config";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";

import { Link } from "react-router-dom";
import ICardProps from "./CardProps";
import axios from "axios";

const Card = (props: ICardProps) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  const body = {
    title: props.title,
    overview: props.overview,
    poster_path: props.poster_path,
    vote_average: props.vote_average,
    id: props.id,
    vote_count: props.vote_count,
    release_date: props.release_date,
  };

  async function addToFavorite(): Promise<any> {
    const res = await axios.post(
      `${BASE_URL}/users/${userId}/loved`,
      body,
      config
    );
    return res;
  }

  async function addToWatch(): Promise<any> {
    const res = await axios.post(
      `${BASE_URL}/users/${userId}/to-watch`,
      body,
      config
    );
    return res;
  }

  async function addToWatched(): Promise<any> {
    const res = await axios.post(
      `${BASE_URL}/users/${userId}/watched`,
      body,
      config
    );
    return res;
  }
  return (
    <VStack p={5} shadow="md" borderWidth="1px" minWidth={300} maxWidth={400}>
      <img
        style={{ borderRadius: "5px" }}
        height={200}
        width={350}
        src={props.poster_path ? `${img_300}${props.poster_path}` : unavailable}
        alt="Movie picture"
      />
      <Text
        w={"100%"}
        fontSize="xl"
        fontFamily="Work sans"
        fontWeight={"bold"}
        noOfLines={1}
      >
        {props.title}
      </Text>
      <Text w={"100%"} fontSize="l" fontFamily="Work sans">
        Release release_date: {props.release_date}
      </Text>

      <Text w={"100%"} fontSize="s" fontFamily="Work sans">
        vote_average: {props.vote_average}
      </Text>
      <Text w={"100%"} fontSize="s" fontFamily="Work sans">
        vote_count: {props.vote_count}
      </Text>

      <HStack w={"100%"} bg="white" justifyContent={"left"}>
        <Wrap>
          <Box height={"100%"}>
            <Link to={"/filmus/movie/" + props.id} className="media">
              <Button colorScheme={"teal"}>Details</Button>
            </Link>
          </Box>
          <WrapItem>
            <IconButton
              onClick={addToWatch}
              colorScheme="yellow"
              aria-label="Star"
              icon={<AiOutlineStar />}
            />
          </WrapItem>
          <IconButton
            onClick={addToFavorite}
            colorScheme="pink"
            aria-label="Heart"
            icon={<MdOutlineFavoriteBorder />}
          />
          <IconButton
            onClick={addToWatched}
            colorScheme="green"
            aria-label="File"
            icon={<FaRegSave />}
          />
        </Wrap>
      </HStack>
    </VStack>
  );
};

export default Card;
