import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Adm from "./pages/Adm/Adm";
import Home from "./pages/Home";
import Cadastroadm from "./pages/Cadastroadm";
import Redefinicao from "./pages/Redefinicao";
import Enviado from "./pages/Enviado";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import ListaPedidos from "./pages/ListaPedidos/ListaPedidos";
import LoginUser from "./pages/LoginUser/LoginUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/lista-pedidos" element={<ListaPedidos />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/login-user" element={<LoginUser />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastroadm" element={<Cadastroadm />} />
        <Route path="/redefinicao" element={<Redefinicao />} />
        <Route path="/enviado" element={<Enviado />} />
        <Route path="/produto" element={<ProdutoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
