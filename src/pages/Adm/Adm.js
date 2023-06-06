import React, { useEffect, useState } from "react";
import "./Adm.css";
import margarida from "../../assets/maragrida.png";
import Header from "../../components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function Adm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleConfirm = () => {
    const allFilled = nome && preco && descricao;
    const oneChanged =
      nome !== state?.produto?.nome ||
      preco !== state?.produto?.preco ||
      descricao !== state?.produto?.descricao;
    if ((state?.produto && oneChanged) || (allFilled && !state?.produto)) {
      const produto = {
        nome,
        preco,
        descricao,
      };
      if (state) {
        axios
          .put(`http://localhost:3001/produtos/${state?.produto?._id}`, produto)
          .then(() => {
            navigate("/adm");
          });
      } else {
        axios.post("http://localhost:3001/produtos/", produto).then(() => {
          navigate("/adm");
        });
      }
    } else {
      alert("Preencha todos os campos");
    }
  };
  useEffect(() => {
    const produto = state?.produto;
    if (produto) {
      setNome(produto?.nome);
      setPreco(produto?.preco);
      setDescricao(produto?.descricao);
    }
  }, [state]);
  return (
    <div className="adm">
      <Header isAdm />
      <div className="adm-content">
        <div className="adm-content-left">
          <img src={margarida} alt="" />
        </div>
        <div className="adm-content-right">
          <h1 className="adm-title">Adicionar produto no site</h1>
          <div clasName="form">
            Nome
            <input
              type="text"
              placeholder="Nome do produto"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
            Preço
            <input
              type="text"
              placeholder="Preço do produto"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
            Descrição
            <input
              type="text"
              placeholder="Descrição do produto"
              className="descricao"
              value={descricao}
              onChange={(e) => {
                setDescricao(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn-cadastrar-produto"
            onClick={handleConfirm}
          >
            {state?.produto ? "Editar" : "Adicionar"} produto
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adm;
