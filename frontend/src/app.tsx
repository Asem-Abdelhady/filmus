import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Personal from "./pages/dashboard/Personal";
import Profile from "./pages/dashboard/Profile";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/filmus" element={<Home/>} />
      <Route path="/filmus/personal" element={<Personal/>} />
      <Route path="/filmus/profile" element={<Profile/>} />
    </Routes>
  );
};

export default App;
