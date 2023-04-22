import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContentModal from "../../../../components/Dashboard/ContentModal/ContentModal";

test("laods and displays Content Modal", async () => {
  render(<ContentModal />);
});
