import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import IApiResponse from "../../../interfaces/ApiResponse";
import IApiWholeRsponse from "../../../interfaces/ApiWholeResponse";
import Card from "./Card/Card";

const CardsList = (responseData: IApiWholeRsponse) => {
  const filteredResults = responseData.results.filter(
    (card) => card.title !== undefined && card.poster_path !== undefined
  );
  const page_name = responseData.page_name;
  const page = responseData.page;
  let cards = filteredResults.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      poster_path={card.poster_path}
      title={card.title}
      release_date={card.release_date ? card.release_date : "Uknown"}
      vote_average={card.vote_average}
      vote_count={card.vote_count}
      isPlanned={false}
      isFavourite={false}
      overview={card.overview}
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
        {page_name} - page: {page}
      </Text>
      <SimpleGrid w={"100%"} minChildWidth="300px" spacing="30px" padding={5}>
        {cards}
      </SimpleGrid>
    </VStack>
  );
};

export default CardsList;
