import React from "react";

import { BASE_URL } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import CardsList from "../../components/Dashboard/Trending/CardsList";
import IApiWholeRsponse from "../../interfaces/ApiWholeResponse";
import CustomPagination from "../../components/Dashboard/Pagination/Pagination";

const Home = () => {
  //const API_KEY: string = process.env.API_KEY;

  const [page, setPage] = useState(1);

  const URL = `${BASE_URL}/imdb/trending/${page}`;

  const { data, error } = useFetch<IApiWholeRsponse>(URL);

  useEffect(() => {
    // window.scroll(0, 0);
    // eslint-disable-next-line
  }, [page]);

  if (error) return <p>There is an error</p>;
  if (!data) return <p>Loading...</p>;

  console.log(data);

  return (
    <div>
      <CardsList
        page_name="Trending this Week"
        page={data.page}
        results={data.results}
        total_pages={data.total_pages}
        total_results={data.total_results}
      />
      <CustomPagination
        setPage={setPage}
        curPage={data.page}
        numOfPages={data.total_pages}
      />
    </div>
  );
};

export default Home;
