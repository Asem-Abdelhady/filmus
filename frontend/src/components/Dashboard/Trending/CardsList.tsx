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
    id={data[d].id}
    title={data[d].title || data[d].name} 
    date={data[d].first_air_date || data[d].release_date}
    media_type={data[d].media_type}
    favourite={data[d][2]} 
    planned={data[d][3]} 
    poster={data[d].poster_path} 
    vote_average={data[d].vote_average}
    vote_count = {data[d].vote_count}
    type={type}/>)
}
return (
    <SimpleGrid w={"100%"} minChildWidth='300px' spacing='30px' padding={5}>
      {list}
    </SimpleGrid>
  );
};

export default CardsList;