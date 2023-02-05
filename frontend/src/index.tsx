import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./app";

export default () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export const mount = (Сomponent) => {
  ReactDom.render(<Сomponent />, document.getElementById("app"));

  if (module.hot) {
    module.hot.accept("./app", () => {
      ReactDom.render(<App />, document.getElementById("app"));
    });
  }
};

export const unmount = () => {
  ReactDom.unmountComponentAtNode(document.getElementById("app"));
};
