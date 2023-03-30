import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import IApiResponse from "../../../interfaces/ApiResponse";
import IApiWholeRsponse from "../../../interfaces/ApiWholeResponse";
import Card from "./Card/Card";

const CardsList = (responseData: IApiWholeRsponse) => {
  let cards = responseData.results.map((card) => (
    <Card
      id={card.id}
      imgPath={card.poster_path}
      name={card.title}
      date={card.release_date}
      rating={card.vote_average}
      votes={card.vote_count}
      isPlanned={false}
      isFavourite={false}
    />
  ));

  return (
    <VStack w="100%" justify={"left"}>
      <Text
        w={"100%"}
        fontSize="2xl"
        fontFamily="Work sans"
        paddingLeft={5}
        justifyItems={"left"}
      >
        Trending This week
      </Text>
      <SimpleGrid w={"100%"} minChildWidth="300px" spacing="30px" padding={5}>
        {cards}
      </SimpleGrid>
    </VStack>
  );
};

export default CardsList;
