import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

const Home = () => {
        return (
            <>
                <div className="hero">
                    <Hero/>
                </div>
            </>
        );
}

function App() {
    
    return (
        <> 
                <div className="app-container">
                    <div className="navbar">
                        <Navbar/>
                    </div>
                    <div className="content">
                        <Routes>
                            <Route path= "/" element={<Home/>}/>
                            <Route path ="/About" element={<About/>}/>
                            <Route path= "/Projects" element={<Projects/>}/>
                        </Routes>
                    </div>
                </div>
        </>
    );
}

export default App;
