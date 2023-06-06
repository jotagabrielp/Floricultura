/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { Carousel } from "@trendyol-js/react-carousel";
import flor from "../../assets/flor.png";
import Produto from "../../components/Produto/Produto";
import Header from "../../components/Header/Header";

function Home() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/produtos/").then((response) => {
      setProdutos(response.data);
    });
  }, []);
  return (
    <>
      <Header />
      <Carousel
        show={3.5}
        swiping={true}
        slide={3}
        responsive={true}
        className="carrossel"
      >
        <img src={flor} className="carrossel-imagem" />
        <img src={flor} className="carrossel-imagem" />
        <img src={flor} className="carrossel-imagem" />
        <img src={flor} className="carrossel-imagem" />
        <img src={flor} className="carrossel-imagem" />
        <img src={flor} className="carrossel-imagem" />
      </Carousel>
      <div className="content">
        <div className="section">
          <h1 className="title">Buquês</h1>
          <h3 className="subtitle">Os mais vendidos</h3>
          <div className="produtos-grid">
            {produtos.map((produto) => {
              return <Produto produto={produto} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
