import React from "react";
import "./Login.css";
import flower from "../../assets/flower.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";

function Login() {
  const [nome, setNome] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = (e) => {
    axios
      .post("http://localhost:3001/usuario/login", {
        nome: nome,
        senha: senha,
      })
      .then((response) => {
        if (response.data.token) {
          const user = jwt(response.data.token);
          sessionStorage.setItem("user", JSON.stringify(user));
          if (state?.from) {
            if (user?.isAdmin) {
              navigate("/adm");
            } else {
              navigate(state.from, { state: { ...state } });
            }
          } else {
            navigate("/");
          }
        } else {
          alert("Usuário ou senha incorretos!");
        }
      });
  };
  return (
    <div className="container">
      <div className="logo">
        <img src={flower} alt="logo Flower Admin" />
      </div>
      <div className="login">
        <div className="login__form">
          <div className="form-input">
            <div className="form-group">
              <input
                type="text"
                className="form"
                placeholder="Nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form"
                placeholder="Senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn-entrar" onClick={handleLogin}>
              ENTRAR
            </button>
          </div>
          <div className="pai">
            <p>Não tem uma conta?</p>
            <Link className="registre-se" to="/cadastro">
              Registre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
