import React from 'react';
import ReactDOM from 'react-dom/client';
import"./index.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import  About from "./About"
import  Home from "./Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Routes>
  </BrowserRouter>
)

