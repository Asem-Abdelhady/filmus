import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Personal from "../../pages/dashboard/Personal";

test("laods and displays Personal page", async () => {
  render(<Personal />);
});
