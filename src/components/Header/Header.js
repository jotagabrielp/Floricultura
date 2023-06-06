import "./Header.css";
import floweradm from "../../assets/floweradm.png";
import flower from "../../assets/flower-rosa.png";
import listadmin from "../../assets/listadm.png";
import list from "../../assets/list.png";
import useradmin from "../../assets/useradm.png";
import user from "../../assets/user.png";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
const Header = ({ isAdm }) => {
  const user = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const icons = useMemo(
    () =>
      isAdm
        ? {
            flower: floweradm,
            list: listadmin,
            user: useradmin,
          }
        : {
            flower,
            list,
            user,
          },
    [isAdm]
  );
  const handleSair = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="topnavbar">
      <div className="topnavbar-left">
        <img
          src={icons.flower}
          alt="logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className={isAdm ? "topnavbar-right adm" : "topnavbar-right"}>
        {user ? (
          <>
            {isAdm && <p onClick={() => navigate("/adm")}>Produtos</p>}
            <p onClick={() => navigate("/lista-pedidos")}>Meus Pedidos</p>
            <p onClick={handleSair}>Sair</p>
          </>
        ) : (
          <p onClick={() => navigate("login")}>Login</p>
        )}
      </div>
    </div>
  );
};

export default Header;
