/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdmMain.css";
import ProdutoAdm from "../../components/ProdutoAdm/ProdutoAdm";
import Header from "../../components/Header/Header";
import ExcluirModal from "../../components/ExcluirModal/ExcluirModal";
import { useNavigate } from "react-router-dom";

function AdmMain() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const handleDeleteRequest = (id) => {
    setShowModal(true);
    setIdToDelete(id);
  };

  const handleCancel = () => {
    setShowModal(false);
    setIdToDelete(null);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/produtos/${idToDelete}`).then(() => {
      setShowModal(false);
      setProdutos(produtos.filter((produto) => produto._id !== idToDelete));
    });
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/login", { state: { from: "/adm" } });
      return;
    }
    axios.get("http://localhost:3001/produtos/").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  return (
    <>
      <Header isAdm />
      <div className="content">
        <div className="produtos-grid">
          {produtos.map((produto) => {
            return (
              <ProdutoAdm
                produto={produto}
                handleDeleteRequest={() => handleDeleteRequest(produto._id)}
              />
            );
          })}
        </div>
        <button
          className="botao-adicionar-produto"
          onClick={() => navigate("/adm/produto")}
        >
          Adicionar Produto
        </button>
      </div>
      {showModal && (
        <ExcluirModal onDelete={handleDelete} onCancel={handleCancel} />
      )}
    </>
  );
}

export default AdmMain;
