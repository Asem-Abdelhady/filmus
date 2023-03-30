import React from "react";

import { base_url } from "../../config/config";
import useFetch from "../../hooks/useFetch";

import CardsList from "../../components/Dashboard/Trending/CardsList";
import IApiWholeRsponse from "../../interfaces/ApiWholeResponse";

const Home = () => {
  //const API_KEY: string = process.env.API_KEY;
  const URL = `${base_url}/trending/all/week?api_key=a500ed6497632b594464be767b4d390d&page=${1}`;

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

export default Home;
