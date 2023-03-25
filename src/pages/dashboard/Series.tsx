import {
    Box,
    Text,
    SimpleGrid,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import Navbar from "../../components/Dashboard/Navbar/Navbar";
  import axios from 'axios';
  import { useEffect, useState } from "react";
  import { base_url } from "../../config/config";
  import Card from "../../components/Dashboard/Trending/Card";

  // TODO : remove test data
  // var data: [string, string, boolean, boolean, string][] = [
  //   ['Taurus', 'Beautiful mountain.', true, true, 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg'],
  //   ['Everest', 'Famous mountain.', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/800px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'],
  //   ['Kilimanjaro', 'Pretty mountain.', true, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/495px-Mt._Kilimanjaro_12.2006.JPG'],
  //   ['Elbrus', 'Great mountain.', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mount_Elbrus_May_2008.jpg/330px-Mount_Elbrus_May_2008.jpg'],
  //   ['Puncak Jaya', 'Nice mountain.', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Puncakjaya.jpg/408px-Puncakjaya.jpg'],
  //   ['Fuji volcano', 'Wonderful mountain.', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/408px-Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg']
  // ]
  
  
  const Movies = () => {
  
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
  
    const fetchTrending = async () => {
      const { data } = await axios.get(
        `${base_url}/discover/tv?api_key=a500ed6497632b594464be767b4d390d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        // `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
  
      setContent(data.results);
    };
  
    useEffect(() => {
      window.scroll(0, 0);
      fetchTrending();
      // eslint-disable-next-line
    }, [page]);
    var list = []
  for (var d in content) {
    list.push(<Card key={"card_Serie_" + d} 
      id={content[d].id}
      title={content[d].title || content[d].name} 
      date={content[d].first_air_date || content[d].release_date}
      media_type={content[d].media_type}
      favourite={content[d][2]} 
      planned={content[d][3]} 
      poster={content[d].poster_path} 
      vote_average={content[d].vote_average}
      vote_count = {content[d].vote_count}
      type={'Serie'}/>)
  }

  return (
    <VStack w="100%" justify={"left"}>
      data
      <Navbar/>
      <Text w={"100%"} fontSize="2xl" fontFamily="Work sans" paddingLeft={5} justifyItems={"left"}>
       Tv Series
      </Text>
      <SimpleGrid w={"100%"} minChildWidth='300px' spacing='30px' padding={5}>
        {list}
      </SimpleGrid>
    </VStack>
  );
};
  
  export default Movies;
  