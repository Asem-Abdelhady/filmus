import React from "react";

import { useEffect, useState } from "react";

import CardsList from "../../components/Dashboard/Trending/CardsList";
import CustomPagination from "../../components/Dashboard/Pagination/Pagination";
import fetchImdb from "../../utils/fetchImdb";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { data, error } = fetchImdb("movies", page);

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
        page_name="Movies"
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

export default Movies;
