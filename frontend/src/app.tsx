import React from "react";
import { Route } from "react-router-dom";
import Movies from "./pages/movies/Movies";

const App = () => {
  <div className="App">
    <Route path="/" component={Movies} exact />
  </div>;
};

export default App;
