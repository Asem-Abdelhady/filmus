import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImageButton from "../../../components/Common/ImageButton";

test("laods and displays button", async () => {
  render(<ImageButton src={"No src"} width={"350px"} />);
});
