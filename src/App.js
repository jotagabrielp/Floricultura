import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Adm from "./pages/Adm/Adm";
import Home from "./pages/Home";
import Cadastroadm from "./pages/Cadastroadm";
import Redefinicao from "./pages/Redefinicao";
import Enviado from "./pages/Enviado";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import AdmMain from "./pages/AdmMain/AdmMain";
import Venda from "./pages/Venda/Venda";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/adm" element={<AdmMain />} />
        <Route path="/adm/produto" element={<Adm />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastroadm" element={<Cadastroadm />} />
        <Route path="/redefinicao" element={<Redefinicao />} />
        <Route path="/enviado" element={<Enviado />} />
        <Route path="/produto" element={<ProdutoPage />} />
        <Route path="/venda" element={<Venda />} />
      </Routes>
    </Router>
  );
}

export default App;
