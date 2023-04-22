import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../../../../components/Dashboard/Navbar/Navbar";

test("laods and displays Navbar", async () => {
  render(<Navbar />);
});
