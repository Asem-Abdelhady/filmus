import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";

import { useParams } from "react-router-dom";

import IMovieData from "../../../interfaces/ApiSingleResponse";
import IVideoData from "../../../interfaces/ApiVideoResponse";

import {
  img_500,
  unavailable,
  unavailableLandscape,
  BASE_URL,
} from "../../../config/config";

import "./ContentModal.css";
import { Button, Box } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InfoIcon from "@material-ui/icons/Info";
import Carousel from "../Carousel/Carousel";
import { HStack, VStack, Text, Stack } from "@chakra-ui/react";

const ContentModal = () => {
  let { id } = useParams();
  const [video, setVideo] = useState();

  const URL = `${BASE_URL}/imdb/movie/${id}`;
  const { data, error } = useFetch<IMovieData>(URL);

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/imdb/videos/${id}`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  if (error) return <p>There is an error</p>;
  if (!data) return <p>Loading...</p>;
  console.log(data);

  return (
    <>
      {data && (
        <Box>
          <Stack w={"100%"} p={5} direction='row' spacing={5}>
            <img
              src={
                data.poster_path
                  ? `${img_500}/${data.poster_path}`
                  : unavailable
              }
              alt={data.title}
              style={{ borderRadius: "15px" }}
              className="dataModal__portrait"
            />
            <VStack>
              <Text
                w={"100%"}
                fontSize="xx-large"
                fontFamily="Work sans"
                fontWeight={"bold"}
              >
                {data.title} ({(data.release_date || "-----").substring(0, 4)})
              </Text>
              <Text
                w={"100%"}
                fontSize="x-large"
                fontStyle={"italic"}
                fontFamily="Work sans"
              >
                {data.tagline}
              </Text>
              <Text w={"100%"} fontFamily="Work sans">
                {data.overview}
              </Text>
              <HStack w={"100%"} justifyContent={"space-between"}>
                <HStack justifyContent={"space-between"}>
                  <Text fontFamily="Work sans" fontWeight={"bold"}>Budjet:</Text>
                  <Text fontFamily="Work sans">{data.budget}$ USD</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text fontFamily="Work sans" fontWeight={"bold"}>Duration:</Text>
                  <Text fontFamily="Work sans">{data.runtime} min</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text fontFamily="Work sans" fontWeight={"bold"}>Country:</Text>
                  <Text fontFamily="Work sans">{" "}
                    {data.production_countries.length > 0
                      ? data.production_countries[0].name
                      : ""}
                  </Text>
                </HStack>
              </HStack>
              <Stack maxWidth={"750px"}>
                <Carousel id={id} />
              </Stack>
              <HStack w={"100%"} display="flex" justifyContent="space-between">
                <div className="trailer-button">
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>

                <div className="imbd-button">
                  <Button
                    variant="contained"
                    startIcon={<InfoIcon />}
                    color="primary"
                    target="__blank"
                    href={`https://www.imdb.com/title/${data.imdb_id}/`}
                  >
                    Check IMBD for more
                  </Button>
                </div>
              </HStack>
            </VStack>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default ContentModal;
