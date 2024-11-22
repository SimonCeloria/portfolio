// Librerias
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Css
import "./index.css";

// Componentes
import Home from "./containers/home/Home";

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
