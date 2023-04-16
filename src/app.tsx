import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Movies from "./pages/dashboard/Movies";
import Personal from "./pages/dashboard/Personal";
import Profile from "./pages/dashboard/Profile";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
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
        <Route path="/filmus/login" element={<Login/>}/>
        <Route path="/filmus/signup" element={<Signup/>}/>
      </Routes>
    </Box>
  );
};

export default App;
