import React, { useEffect, useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";

import { useParams } from "react-router-dom";

import IMovieData from "../../../interfaces/ApiSingleResponse";
import IVideoData from "../../../interfaces/ApiVideoResponse";

import {
  img_500,
  unavailable,
  unavailableLandscape, base_url } from "../../../config/config";

import "./ContentModal.css";
import { Button, Box } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InfoIcon from "@material-ui/icons/Info";
import Carousel from "../Carousel/Carousel";

const ContentModal = () => {
  let { id } = useParams();
  const [video, setVideo] = useState();



  const URL = `${base_url}/movie/${id}?api_key=a500ed6497632b594464be767b4d390d&language=en-US`;
  const { data, error } = useFetch<IMovieData>(URL);


  const fetchVideo = async () => {
    const { data } = await axios.get(
      `${base_url}/movie/${id}/videos?api_key=a500ed6497632b594464be767b4d390d&language=en-US`
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
            
            <div>
              
              <div className="ContentModal">
                <img
                  src={
                    data.poster_path
                      ? `${img_500}/${data.poster_path}`
                      : unavailable
                  }
                  alt={data.title}
                  className="dataModal__portrait"
                />
                <img
                  src={
                    data.backdrop_path
                      ? `${img_500}/${data.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={data.title}
                  className="dataModal__landscape"
                />
                <div className="dataModal__about">
                  <span className="dataModal__title">
                    {data.title} (
                    {(
                      data.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {data.tagline && (
                    <i className="tagline">{data.tagline}</i>
                  )}

                  <span className="dataModal__description">
                    {data.overview}
                  </span>

                  <span className="Basic-Info">
                    <span>
                      <span className="info-tag">Budjet:</span> {data.budget}$ USD
                    </span>

                    <span>
                      <span className="info-tag">Duration:</span> {data.runtime} min
                    </span>

                    <span>
                      <span className="info-tag">Country:</span> {data.production_countries.length > 0 ? data.production_countries[0].name: ""} 
                    </span>
                    

                  </span>

                  <div>
                    <Carousel id={id}/>
                  </div>


                  <Box display="flex" justifyContent="space-between">
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

                  </Box>
                </div>
              </div>
            </div>
          )}
    </>
  );
}


export default ContentModal;