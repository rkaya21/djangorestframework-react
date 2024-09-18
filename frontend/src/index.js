import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import { App } from "./App";
import Header  from "./components/Header";
import { Footer } from "./components/Footer";

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);