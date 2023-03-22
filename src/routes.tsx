import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Templates/Home";
import Autenticate from "./Templates/Autenticate";

const Listeners = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/Autenticated" element={<Autenticate/>}/>
        </Routes>
    )
}

export default Listeners