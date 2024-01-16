// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router> 
    <div>
            <div
                style={{
                    minHeight: "400px",
                    color: "green",
                }}
            >
                <h1>GeeksforGeeks</h1>
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default App;
