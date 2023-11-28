import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages";
import Postagem from "../pages/postagem";

export default function Rotas() {

    return <BrowserRouter>
        <Routes>
            <Route index path="/" element={ <Home/> } />
            <Route path="/postagem/:nome/:descricao" element={ <Postagem /> } />
        </Routes>
    </BrowserRouter>
}

