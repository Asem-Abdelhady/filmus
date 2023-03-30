import { Text, HStack, VStack, IconButton } from "@chakra-ui/react";

import React from "react";

import DefaultButton from "../../../Common/DefaultButton";
import ImageButton from "../../../Common/ImageButton";

import HeartEmpty from "./imgs/heart-empty.png";
import Heart from "./imgs/heart.png";
import StarEmpty from "./imgs/star-empty.png";
import Star from "./imgs/star.png";

import { img_300, unavailable } from "../../../../config/config";

import ICardProps from "./CardProps";

const Card = (props: ICardProps) => {
  return (
    <VStack p={5} shadow="md" borderWidth="1px" minWidth={300} maxWidth={400}>
      <img
        style={{ borderRadius: "5px" }}
        height={200}
        width={350}
        src={props.imgPath ? `${img_300}${props.imgPath}` : unavailable}
        alt="Movie picture"
      />
      <Text w={"100%"} fontSize="xl" fontFamily="Work sans">
        {props.name}
      </Text>
      <Text w={"100%"} fontSize="l" fontFamily="Work sans">
        Release date: {props.date}
      </Text>

      <Text w={"100%"} fontSize="s" fontFamily="Work sans">
        rating: {props.rating}
      </Text>
      <Text w={"100%"} fontSize="s" fontFamily="Work sans">
        votes: {props.votes}
      </Text>

      <HStack w={"100%"} bg="white" justifyContent={"left"}>
        <DefaultButton text={"Watch now!"} />
        <IconButton colorScheme="yellow" aria-label="Star" icon={StarEmpty} />
        <IconButton colorScheme="pink" aria-label="Heart" icon={HeartEmpty} />
      </HStack>
    </VStack>
  );
};

export default Card;
