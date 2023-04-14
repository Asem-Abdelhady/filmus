import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Movies from "./pages/dashboard/Movies";
import Personal from "./pages/dashboard/Personal";
import Profile from "./pages/dashboard/Profile";
import ContentModal from "./components/Dashboard/ContentModal/ContentModal";
import "./App.css";
import Navbar from "./components/Dashboard/Navbar/Navbar";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box minW="650px">
      <Navbar />
      <Routes>
        <Route path="/filmus" element={<Home />} />
        <Route path="/filmus/movies" element={<Movies />} />
        <Route path="/filmus/personal" element={<Personal />} />
        <Route path="/filmus/profile" element={<Profile />} />
        <Route path="/filmus/movie/:id" element={<ContentModal/>}/>
      </Routes>
    </Box>
  );
};

export default App;
