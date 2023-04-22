import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Carousel from "../../../../components/Dashboard/Carousel/Carousel";

test("laods and displays Crousel", async () => {
  render(<Carousel id={"1"} />);
});
