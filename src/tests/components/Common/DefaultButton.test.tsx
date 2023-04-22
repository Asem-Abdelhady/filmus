import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DefaultButton from "../../../components/Common/DefaultButton";

test("laods and displays button", async () => {
  render(<DefaultButton text={"No button"} />);
});
