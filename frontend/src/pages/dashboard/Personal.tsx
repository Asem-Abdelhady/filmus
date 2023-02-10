import {
  VStack,
  Center,
  Container,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import CardsList from "../../components/Dashboard/Movies/CardsList";

// TODO : remove test data
var dataFav: [string, string, boolean, boolean, string][] = [
  ['Taurus', 'Beautiful mountain.', true, true, 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg'],
  ['Kilimanjaro', 'Pretty mountain.', true, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/495px-Mt._Kilimanjaro_12.2006.JPG'],
  ['Fuji volcano', 'Wonderful mountain.', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/408px-Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg']
]
var dataPlan: [string, string, boolean, boolean, string][] = [
  ['Taurus', 'Beautiful mountain.', true, true, 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg'],
  ['Kilimanjaro', 'Pretty mountain.', true, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/495px-Mt._Kilimanjaro_12.2006.JPG'],
]


const Personal = () => {
  return (
    <VStack w="100%" justify={"left"}>
      <Navbar/>
      <Text w={"100%"} fontSize="2xl" fontFamily="Work sans" paddingLeft={5} justifyItems={"left"}>
        Favourite
      </Text>
      <CardsList data={dataFav} type={'Favourite'}/>
      <Text w={"100%"} fontSize="2xl" fontFamily="Work sans" paddingLeft={5} justifyItems={"left"}>
        To Watch
      </Text>
      <CardsList data={dataPlan} type={'Planned'}/>
    </VStack>
  );
};

export default Personal;
