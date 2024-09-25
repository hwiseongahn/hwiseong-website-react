import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function Home() {
        return (
            <>
                <div className="Hero">
                    <h1>HI</h1>
                    <h2>is this the body</h2>
                </div>
            </>
        );
        
}

function App() {
    return (
        <>
                <Navbar/>
                <div className="container">
                <Routes>
                    <Route path= "/" element={<Home/>}/>
                    <Route path ="/About" element={<About/>}/>
                    <Route path= "/Projects" element={<Projects/>}/>
                </Routes>
                </div>
        </>
  );
}

export default App;
