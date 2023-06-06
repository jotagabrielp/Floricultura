import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./ListaPedidos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EnderecoModal from "../../components/EnderecoModal/EnderecoModal";
const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [endereco, setEndereco] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleEndereco = (pedido) => {
    setEndereco(pedido.endereco);
    setShowModal(true);
  };

  const handleCancel = () => {
    setEndereco(null);
    setShowModal(false);
  };

  const handleDeletePedido = (id) => {
    axios.delete(`http://localhost:3002/vendas/${id}`).then(() => {
      setPedidos(pedidos.filter((pedido) => pedido._id !== id));
    });
  };
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/login", { state: { from: "/lista-pedidos" } });
      return;
    }
    axios
      .get("http://localhost:3002/vendas?userId=" + user._id)
      .then((response) => {
        setPedidos(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <table className="tabela-pedidos">
        <tr>
          <th>Produto</th>
          <th>qtd</th>
          <th>preço</th>
          <th>Informações de endereço</th>
          <th>Cancelar pedido</th>
        </tr>
        {pedidos?.map((pedido) => (
          <tr>
            <td>{pedido.nomeProduto}</td>
            <td>{pedido.quantidade}</td>
            <td>R$ {pedido.valorTotal}</td>
            <td>
              <button onClick={() => handleEndereco(pedido)}>...</button>
            </td>
            <td>
              <button onClick={() => handleDeletePedido(pedido._id)}>
                Cancelar
              </button>
            </td>
          </tr>
        ))}
      </table>
      {showModal && (
        <EnderecoModal endereco={endereco} handleCancel={handleCancel} />
      )}
    </>
  );
};

export default ListaPedidos;
