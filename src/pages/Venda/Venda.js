import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import flor from "./../../assets/flor.png";
import "./Venda.css";
import { useLocation } from "react-router-dom";

export default function Venda() {
  const [count, setCount] = useState(1);
  const { state } = useLocation();
  useEffect(() => {
    if (count < 1) {
      setCount(1);
    }
  }, [count]);
  const handleDecrease = () => {
    if (count === 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Header />
      <div className="venda-container">
        <h1 id="title">Minha cesta</h1>
        <table>
          <tr>
            <th>
              <span>Produto</span>
            </th>
            <th>
              <span>Nome</span>
            </th>
            <th colSpan={3}>
              <span>Qtd.</span>
            </th>
            <th>
              <span>Preço</span>
            </th>
          </tr>
          <tr>
            <td className="image">
              <img id="img-product" src={flor} alt="" />
            </td>
            <td>
              <span id="name">Girassol</span>
            </td>
            <td>
              <button onClick={handleDecrease}>-</button>
            </td>
            <td>
              <span className="unit">{count} </span>
            </td>
            <td>
              <button onClick={() => setCount(count + 1)}>+</button>
            </td>
            <td>
              <span id="price">R$80,00</span>
            </td>
          </tr>
        </table>
        <hr />
        <div id="endereco-entrega">
          <span id="title-deliver">Endereço para entrega</span>
          <div className="grid-container">
            <div className="grid-item">
              {" "}
              <input type="text" value="CEP" />
            </div>
            <div className="grid-item">
              {" "}
              <input type="text" value="Número" />
            </div>

            <div className="grid-item">
              {" "}
              <input type="text" value="Logradouro" />
            </div>
            <div className="grid-item">
              {" "}
              <input type="text" value="Complemento" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn-finalizar-compra">
          Confirmar pedido
        </button>
      </div>
    </>
  );
}
