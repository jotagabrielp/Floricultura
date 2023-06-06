import React, { useState } from "react";
import "./Cadastroadm.css";
import flower from "../../assets/flower.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cadastroadm() {
  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
  const navigate = useNavigate();
  const handleRegister = () => {
    if (senha === confirmarSenha) {
      axios
        .post("http://localhost:3001/usuario/registro", {
          nome: nome,
          senha: senha,
        })
        .then((response) => {
          if (response.data === "Usuário registrado com sucesso") {
            navigate("/login");
          } else {
            alert("erro no cadastro, tente novamente mais tarde");
          }
        });
    } else {
      alert("As senhas não conferem!");
    }
  };
  return (
    <div className="container">
      <div className="logo">
        <img src={flower} alt="logo Flower redefinição" />
      </div>
      <div className="form-input">
        <h1 className="title-form">Formulário de cadastro</h1>
        <div className="form-cadastro">
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </div>
        <div className="form-cadastro">
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </div>
        <div className="form-cadastro">
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => {
              setConfirmarSenha(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn-cadastrar"
          onClick={handleRegister}
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );
}

export default Cadastroadm;
