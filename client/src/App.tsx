import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Language from "./pages/Language";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/language" element={<Language />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
