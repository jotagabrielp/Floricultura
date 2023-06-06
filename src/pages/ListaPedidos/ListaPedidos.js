import Header from "../../components/Header/Header";
import "./ListaPedidos.css";
const ListaPedidos = () => {
    return (
        <>
        <Header/>
        <table className="tabela-pedidos">
            <tr>
                <th>Produto</th>
                <th>qtd</th>
                <th>preço</th>
                <th>Mais info</th>
            </tr>
            <tr>
                <td>Margarida</td>
                <td>02</td>
                <td>300 reais</td>
                <td><button>...</button></td>
            </tr>
        </table>
        </>
    )
}

export default ListaPedidos;