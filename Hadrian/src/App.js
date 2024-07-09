import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import DCA from "./DCA";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dca" element={<DCA />} />       
        </Routes>
      </BrowserRouter>
    </>
  );
}
