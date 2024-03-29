import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../../config/config";
import "./Carousel.css";
import { BASE_URL } from "../../../config/config";
import ICreditsData, { ICast } from "../../../interfaces/ApiCreditsResponse";

const handleDragStart = (e: any): React.DragEventHandler<HTMLImageElement> =>
  e.preventDefault();

interface IProps {
  id: string;
}

const Gallery = (props: IProps) => {
  const [credits, setCredits] = useState<ICast[]>([]);

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get<ICreditsData>(
      `${BASE_URL}/imdb/credits/${props.id}`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Gallery;
