import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProfileButton from "../../../../components/Dashboard/Navbar/ProfileButton";

test("laods and displays Profile button", async () => {
  render(<ProfileButton imageUrl={"Some url"} />);
});
