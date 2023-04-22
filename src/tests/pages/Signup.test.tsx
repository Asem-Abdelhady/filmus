import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Signup from "../../pages/auth/Signup";

test("laods and displays signup form", async () => {
  const setToken = jest.fn();
  const setUserId = jest.fn();
  render(<Signup setToken={setToken} setUserId={jest.fn()} />);
});
