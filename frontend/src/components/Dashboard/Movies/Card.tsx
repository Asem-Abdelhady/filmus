import {
  Image,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import DefaultButton from "../../Common/DefaultButton";
import ImageButton from "../../Common/ImageButton";
import HeartEmpty from "../../../assets/heart-empty.png";
import Heart from "../../../assets/heart.png";
import StarEmpty from "../../../assets/star-empty.png";
import Star from "../../../assets/star.png";

// TODO : set star & heart icons

const Card = ({url, title, description, favourite, planned, type}) => {
  return (
    <VStack p={5} shadow='md' borderWidth='1px' minWidth={300} maxWidth={400}>
      <Image
        borderRadius='2xl'
        height={200}
        width={350}
        src={url}
        alt='Movie picture'
      />
      <Text w={'100%'} fontSize="xl" fontFamily="Work sans">{title}</Text>
      <Text w={'100%'} fontSize="l" fontFamily="Work sans">{description}</Text>
      <HStack w={'100%'} bg='white' justifyContent={'left'}>
        <DefaultButton text={"Watch now!"}/>
        {type != 'Favourite' ? <ImageButton colorScheme="yellow" src={planned? Star : StarEmpty} width={25}/> : ""}
        {type != 'Planned' ? <ImageButton colorScheme="pink" src={favourite? Heart : HeartEmpty} width={25}/> : ""}
      </HStack>
    </VStack>
  );
};

export default Card;
