import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "../../../../../components/Dashboard/Trending/Card/Card";

test("laods and displays Card", async () => {
  render(
    <Card
      title={""}
      overview={""}
      poster_path={null}
      vote_average={0}
      id={0}
      vote_count={0}
      release_date={""}
      isPlanned={false}
      isFavourite={false}
    />
  );
});
