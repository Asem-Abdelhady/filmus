import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Movies from "../../pages/dashboard/Movies";

test("laods and displays Movies page", async () => {
  render(<Movies />);
});
