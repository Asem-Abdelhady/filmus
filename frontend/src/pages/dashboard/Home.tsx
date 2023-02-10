import {
  Box,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import CardsList from "../../components/Dashboard/Movies/CardsList";

// TODO : remove test data
var data: [string, string, boolean, boolean, string][] = [
  ['Taurus', 'Beautiful mountain.', true, true, 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg'],
  ['Everest', 'Famous mountain.', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/800px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'],
  ['Kilimanjaro', 'Pretty mountain.', true, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/495px-Mt._Kilimanjaro_12.2006.JPG'],
  ['Elbrus', 'Great mountain.', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mount_Elbrus_May_2008.jpg/330px-Mount_Elbrus_May_2008.jpg'],
  ['Puncak Jaya', 'Nice mountain.', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Puncakjaya.jpg/408px-Puncakjaya.jpg'],
  ['Fuji volcano', 'Wonderful mountain.', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/408px-Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg']
]

const Home = () => {
  return (
    <VStack w="100%" justify={"left"}>
      <Navbar/>
      <Text w={"100%"} fontSize="2xl" fontFamily="Work sans" paddingLeft={5} justifyItems={"left"}>
        Movies
      </Text>
      <CardsList data={data} type={'Home'}/>
    </VStack>
  );
};

export default Home;
