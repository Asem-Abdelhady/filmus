import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Movies from "./pages/dashboard/Movies";
import Personal from "./pages/dashboard/Personal";
import Profile from "./pages/dashboard/Profile";
import ContentModal from "./components/Dashboard/ContentModal/ContentModal";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import "./App.css";
import Navbar from "./components/Dashboard/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import useToken from "./hooks/useToken";
import useUserId from "./hooks/useUserId";
import PageNotFound from "./pages/error/Error";

const App = () => {
  const { token, setToken } = useToken();
  const { userId, setUserId } = useUserId();
  const location = useLocation();
  if ((!token || !userId) && !location.pathname.endsWith("signup")) {
    return <Login setToken={setToken} setUserId={setUserId} />;
  }
  return (
    <Box minW="650px">
      <Navbar />
      <Routes>
        <Route path="/filmus" element={<Home />} />
        <Route path="/filmus/movies" element={<Movies />} />
        <Route path="/filmus/personal" element={<Personal />} />
        <Route path="/filmus/profile" element={<Profile />} />
        <Route path="/filmus/movie/:id" element={<ContentModal />} />
        <Route
          path="/filmus/signup"
          element={
            localStorage.getItem("token") && localStorage.getItem("userId") ? (
              <Navigate to={"/filmus"} />
            ) : (
              <Signup setToken={setToken} setUserId={setUserId} />
            )
          }
        />
        <Route
          path="/filmus/login"
          element={
            localStorage.getItem("token") && localStorage.getItem("userId") ? (
              <Navigate to={"/filmus"} />
            ) : (
              <Login setToken={setToken} setUserId={setUserId} />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
