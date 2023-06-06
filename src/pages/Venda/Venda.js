import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import flor from "./../../assets/flor.png";
import "./Venda.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Venda() {
  const [id, setId] = useState("");
  const [count, setCount] = useState(1);
  const [CEP, setCEP] = useState();
  const [numero, setNumero] = useState();
  const [logradouro, setLogradouro] = useState();
  const [complemento, setComplemento] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state?.produto) {
    navigate("/");
  }
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

  const handleConfirm = () => {
    const allTouched = CEP && numero && logradouro;
    if (!allTouched) {
      alert("Preencha todos os campos");
      return;
    }
    axios
      .post("http://localhost:3002/vendas", {
        nomeProduto: state.produto.nome,
        valorTotal: (parseFloat(state.produto.preco) * count).toFixed(2),
        quantidade: count,
        userId: id,
        endereco: {
          CEP: CEP,
          numero: numero,
          logradouro: logradouro,
          complemento: complemento,
        },
      })
      .then(() => {
        navigate("/lista-pedidos");
      });
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/login", { state: { from: "/venda", ...state } });
    } else {
      setId(JSON.parse(user).id);
    }
  }, []);
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
              <span id="name">{state.produto.nome}</span>
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
              <span id="price">
                R$ {(parseFloat(state.produto.preco) * count).toFixed(2)}
              </span>
            </td>
          </tr>
        </table>
        <hr />
        <div id="endereco-entrega">
          <span id="title-deliver">Endereço para entrega</span>
          <div className="grid-container">
            <div className="grid-item">
              {" "}
              <input
                type="text"
                placeholder="CEP"
                value={CEP}
                onChange={(e) => setCEP(e.target.value)}
              />
            </div>
            <div className="grid-item">
              {" "}
              <input
                type="text"
                placeholder="Logradouro"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
              />
            </div>
            <div className="grid-item">
              {" "}
              <input
                type="text"
                placeholder="Numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>

            <div className="grid-item">
              {" "}
              <input
                type="text"
                placeholder="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn-finalizar-compra"
          onClick={handleConfirm}
        >
          Confirmar pedido
        </button>
      </div>
    </>
  );
}
