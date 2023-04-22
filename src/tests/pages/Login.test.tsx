import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "../../pages/auth/Login";

test("laods and displays login form", async () => {
  const setToken = jest.fn();
  const setUserId = jest.fn();
  render(<Login setToken={setToken} setUserId={jest.fn()} />);
  let userIdInput = screen.getAllByRole("textbox")[0];

  let passwordInput = screen.getAllByRole("inputtextbox")[1];
  console.log(passwordInput);
  userEvent.type(userIdInput, "el3os10@gmail.com");
  userEvent.type(passwordInput, "password");
  await userEvent.click(screen.getByText("Login", { selector: "button" }));
  expect(setToken).toHaveBeenCalled();
  expect(setUserId).toHaveBeenCalled();
});
