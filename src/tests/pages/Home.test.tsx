import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/dashboard/Home";

test("laods and displays Home page", async () => {
  render(<Home />);
});
