import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

function Home() {
        return (
            <>
                <div className="Hero">
                    <h1>HI</h1>
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
                </Routes>
                </div>

        </>
  );
}

export default App;
