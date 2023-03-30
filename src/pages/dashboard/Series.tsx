import React from "react";

import { base_url } from "../../config/config";
import useFetch from "../../hooks/useFetch";

import IApiWholeRsponse from "../../interfaces/ApiWholeResponse";
import CardsList from "../../components/Dashboard/Trending/CardsList";

const Series = () => {
  const URL = `${base_url}/discover/tv?api_key=a500ed6497632b594464be767b4d390d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}`;

  const { data, error } = useFetch<IApiWholeRsponse>(URL);

  if (error) return <p>There is an error</p>;
  if (!data) return <p>Loading...</p>;
  console.log(data);
  return (
    <CardsList
      page={data.page}
      results={data.results}
      total_pages={data.total_pages}
      total_results={data.total_results}
    />
  );
};

export default Series;
