import flor from "./../../assets/flor.png";
import "./ProdutoPage.css";
import Header from "../../components/Header/Header";
const ProdutoPage = () => {
  return (
    <>
      <Header />
      <div className="produto-page-content">
        <div className="produto-description">
          <img src={flor} alt="" className="produto-description-image" />
          <div className="produto-description-content">
            <h1 className="produto-description-content-title">Girassol</h1>
            <h3 className="produto-description-content-price">R$ 80,00</h3>
            <div className="caption-container">
              <span className="caption">
                À vista no pix até <span className="green">(5%OFF)</span>
              </span>
            </div>
            <div className="produto-description-form">
              <button className="botao-comprar">Comprar agora</button>
            </div>
          </div>
        </div>
        <div className="produto-mais-info">
          <h1 className="produto-mais-info-title">Descrição do produto</h1>
          <p className="produto-mais-info-text">
            O girassol é uma cultura de ampla capacidade de adaptação às
            diversas condições de latitude, longitude e fotoperíodo. Nos últimos
            anos, vem se apresentando como opção de rotação e sucessão de
            culturas nas regiões produtoras de grãos, principalmente após a soja
            na região Centro-Oeste. o sistema radicular profundo que explora
            grande volume de solo e, consequentemente, absorve maior quantidade
            de água e nutrientes. Entretanto, o cultivo de girassol deve ser
            destinado às áreas que, preferencialmente, adotem práticas de manejo
            melhoradoras das características físicas do solo, pois o girassol é
            fisicamente sensível à compactação de solo e quimicamente à acidez.
          </p>
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
