import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pagintation from "../../../../components/Dashboard/Pagination/Pagination";

test("laods and displays Pagintation", async () => {
  render(<Pagintation setPage={jest.fn()} curPage={1} numOfPages={10} />);
});
