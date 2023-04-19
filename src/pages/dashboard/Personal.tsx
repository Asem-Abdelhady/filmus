import axios from "axios";
import { useState, useEffect } from "react";
import { Divider, Text, VStack } from "@chakra-ui/react";
import IApiResponse from "../../interfaces/ApiResponse";
import React from "react";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import CardsList from "../../components/Dashboard/Trending/CardsList";
import { BASE_URL } from "../../config/config";
import fetchMovies from "../../utils/fetchMovies";

export default function Personal() {
  const [loved, setLoved] = useState<IApiResponse[]>([]);
  const [watched, setWatched] = useState<IApiResponse[]>([]);
  const [toWatch, setToWatch] = useState<IApiResponse[]>([]);
  const [isLoading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    setLoading(true);
    fetchMovies("loved").then((res) => setLoved(res));
    fetchMovies("watched").then((res) => setWatched(res));
    fetchMovies("to-watch").then((res) => setToWatch(res));
    setLoading(false);
  }, []);

  return !isLoading ? (
    <>
      <VStack w="100%" justify={"left"}>
        <Text
          w={"100%"}
          fontSize="5xl"
          fontFamily="Work sans"
          paddingLeft={5}
          justifyItems={"left"}
        >
          Favourite
        </Text>
        <Divider orientation={"horizontal"} colorScheme={"blackAlpha"} />
        <CardsList
          page={1}
          results={loved}
          total_pages={0}
          total_results={0}
          page_name={""}
        />
        <Divider orientation={"horizontal"} />

        <Text
          w={"100%"}
          fontSize="5xl"
          fontFamily="Work sans"
          paddingLeft={5}
          justifyItems={"left"}
        >
          To Watch
        </Text>
        <Divider orientation={"horizontal"} />

        <CardsList
          page={1}
          results={toWatch}
          total_pages={0}
          total_results={0}
          page_name={""}
        />
        <Divider orientation={"horizontal"} />

        <Text
          w={"100%"}
          fontSize="5xl"
          fontFamily="Work sans"
          paddingLeft={5}
          justifyItems={"left"}
        >
          Watched
        </Text>
        <Divider orientation={"horizontal"} colorScheme={"blackAlpha"} />

        <CardsList
          page={1}
          results={watched}
          total_pages={0}
          total_results={0}
          page_name={""}
        />
      </VStack>
    </>
  ) : (
    <div>Loading</div>
  );
}
