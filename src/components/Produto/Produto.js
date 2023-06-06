import { useNavigate } from "react-router-dom";
import flor from "../../assets/flor.png";
import "./Produto.css";
const Produto = ({ produto }) => {
  const navigate = useNavigate();
  return (
    <div className="produto" key={produto.id}>
      <img src={flor} className="produto-image" alt="flor" />
      <div className="preco-container">
        <h1 className="produto-nome">{produto.nome}</h1>
        <h3 className="produto-preco">R$ {produto.preco}</h3>
      </div>
      <p className="descricao-produto">{produto.descricao}</p>
      <button className="botao-comprar" onClick={() => navigate("/produto")}>
        Comprar agora
      </button>
    </div>
  );
};

export default Produto;
