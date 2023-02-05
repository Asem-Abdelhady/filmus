import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="\" element={<Movies />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
