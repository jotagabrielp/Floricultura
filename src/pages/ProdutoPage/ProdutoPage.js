import flor from "./../../assets/flor.png";
import "./ProdutoPage.css";
import Header from "../../components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
const ProdutoPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.produto) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <div className="produto-page-content">
        <div className="produto-description">
          <img src={flor} alt="" className="produto-description-image" />
          <div className="produto-description-content">
            <h1 className="produto-description-content-title">
              {state?.produto.nome}
            </h1>
            <h3 className="produto-description-content-price">
              R$ {parseFloat(state?.produto.preco).toFixed(2)}
            </h3>
            <div className="caption-container">
              <span className="caption">
                À vista no pix até <span className="green">(5%OFF)</span>
              </span>
            </div>
            <div className="produto-description-form">
              <button
                className="botao-comprar"
                onClick={() => {
                  navigate("/venda", { state });
                }}
              >
                Comprar agora
              </button>
            </div>
          </div>
        </div>
        <div className="produto-mais-info">
          <h1 className="produto-mais-info-title">Descrição do produto</h1>
          <p className="produto-mais-info-text">{state?.produto.descricao}</p>
        </div>
        <div className="produto-mais-info">
          <h1 className="produto-mais-info-title">Frete e devolução</h1>
          <ul>
            <li>Entrega para todo Brasil</li>
            <li>
              Você tem 30 dias para devolver seu pedido gratuitamente, sem
              perrengue.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProdutoPage;
