import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/home";

import "./App.css";
import "./static/style/fonts.css";
import Login from "./pages/login";
import SearchResult from "./pages/search-result";

function App() {
  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={SearchResult} />
    </>
  );
}

export default App;
