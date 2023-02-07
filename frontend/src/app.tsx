import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/filmus" element={<Movies />} />
    </Routes>
  );
};

export default App;
