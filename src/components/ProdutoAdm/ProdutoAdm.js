import flor from "../../assets/flor.png";
import "./ProdutoAdm.css";
import { useNavigate } from "react-router-dom";
const ProdutoAdm = ({ produto, handleDeleteRequest }) => {
  const navigate = useNavigate();
  return (
    <div className="produto">
      <img src={flor} className="produto-image" alt="flor" />
      <div className="preco-container">
        <h1 className="produto-nome">{produto.nome}</h1>
        <h3 className="produto-preco">R$ {produto.preco}</h3>
      </div>
      <p className="descricao-produto">{produto.descricao}</p>
      <div className="button-container-adm">
        <button
          className="botao-editar-produto"
          onClick={() => navigate("/adm/produto", { state: { produto } })}
        >
          Editar Produto
        </button>
        <button
          className="botao-excluir-produto"
          onClick={() => handleDeleteRequest()}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ProdutoAdm;
