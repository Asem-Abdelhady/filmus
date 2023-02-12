import {
    SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

// Data item: (title, ?favourite, ?plannes, url)

const CardsList = ({data, type}) => {
var list = []
for (var d in data) {
  list.push(<Card key={"card_" + type + "_" + d} 
    title={data[d][0]} 
    description={data[d][1]} 
    favourite={data[d][2]} 
    planned={data[d][3]} 
    url={data[d][4]} 
    type={type}/>)
}
return (
    <SimpleGrid w={"100%"} minChildWidth='300px' spacing='30px' padding={5}>
      {list}
    </SimpleGrid>
  );
};

export default CardsList;