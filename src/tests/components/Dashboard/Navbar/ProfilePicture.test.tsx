import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProfilePicture from "../../../../components/Dashboard/Navbar/ProfilePicture";

test("laods and displays Profile picture", async () => {
  render(<ProfilePicture pic_path={"Some Source"} />);
});
