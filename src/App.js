import "./App.css";
import React from "react";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Reserve from "./components/Reserve";
import Confirmed from "./components/confirmed";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" Component={Main}></Route>
          <Route path="/reserve" Component={Reserve}></Route>
          <Route path="/confirmed" Component={Confirmed}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
