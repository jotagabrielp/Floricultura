import React from "react";
import "./LoginUser.css";
import flower from "../../assets/flower.png";
import { Link } from "react-router-dom";
function LoginUser() {
  return (
    <div className="container">
      <div className="logo">
        <img src={flower} alt="logo Flower" />
      </div>
      <div className="login">
        <div className="login__form">
          <div className="form-input">
            <div className="form-group">
              <input type="text" className="form" placeholder="Usuário" />
            </div>
            <div className="form-group">
              <input type="password" className="form" placeholder="Senha" />
            </div>
            <button type="submit" className="btn-entrar">
              ENTRAR
            </button>
          </div>
          <Link className="esqueceu-senha" to="/redefinicao">
            Esqueceu a Senha?
          </Link>
          <br></br>
          <div className="pai">
            <p>Não tem uma conta?</p>
            <Link className="registre-se" to="/cadastroadm">
              Registre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
