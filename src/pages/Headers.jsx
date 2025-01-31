import { useState, useEffect } from "react";
import myImage from "../components/Me.png";
import "./Header.css";

function Headers() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setImgUrl(myImage);
  }, []);

  useEffect(() => {
    // Função para alterar o texto do h1
    function changeH1Text(x) {
      const h1 = document.querySelector(".header-h1-1 h1");
      if (x.matches) {
        // Se a consulta de mídia corresponder
        h1.textContent = "Olá meu nome é Danton, sou um";
      } else {
        h1.textContent = "Danton Ferrari";
      }
    }

    // Define a consulta de mídia
    const x = window.matchMedia("(min-width: 1008px)");
    changeH1Text(x); // Chama a função inicialmente
    x.addEventListener("change", changeH1Text); // Adiciona um listener para mudanças

    // Limpeza do evento quando o componente for desmontado
    return () => {
      x.removeEventListener("change", changeH1Text);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-h1s">
        <div className="header-h1-1">
          <h1>Danton Ferrari</h1>
        </div>
        <div className="header-h1-2">
          <h1>&lt;Front-end Developer/&gt;</h1>
          <h2 className="reserva1">
            <span className="linha">FRONT</span>-END
          </h2>
          <h2 className="reserva2">
            DE<span className="linha">VELOPER</span>
          </h2>
        </div>
      </div>
      <div className="header-img">
        <img id="eu" src={imgUrl} />
      </div>
    </div>
  );
}

export default Headers;
