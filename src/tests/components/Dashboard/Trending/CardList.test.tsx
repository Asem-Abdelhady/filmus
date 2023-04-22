import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardList from "../../../../components/Dashboard/Trending/CardsList";

test("laods and displays CardList", async () => {
  render(
    <CardList
      page_name={""}
      page={0}
      results={[]}
      total_pages={0}
      total_results={0}
    />
  );
});
