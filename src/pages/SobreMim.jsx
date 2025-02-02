import { useState, useEffect } from "react";
import jsImage from "../components/js.png";
import htmlImage from "../components/html.png";
import cssImage from "../components/css.png";
import pythonImage from "../components/python.png";
import "./SobreMim.css";

function SobreMim() {
  const [imgUrls, setImgUrls] = useState({});

  useEffect(() => {
    setImgUrls({
      js: jsImage,
      html: htmlImage,
      css: cssImage,
      python: pythonImage,
    });
  }, []);

  return (
    <div id="sobre-mim" className="sobre-mim">
      <div className="curriculo hidden">
        <div className="qualificacoes">
          <h2 className="qualificacoes-h2">QUALIFICAÇÕES</h2>
          <div className="qualificacoes-lista">
            <ul>
              <li>
                Análise e Desenvolvimento de Sistemas - Uninter em andamento;
              </li>
              {/* <li>Desenhista Mecânico 800 horas - Senai;</li> */}
              <li>Lógica de Programação 60 horas - Senac;</li>
              <li>Banco de Dados 40 horas - Plataforma Mundi - IFSul;</li>
              <li>Lógica de Programação 14 horas - Senai;</li>
              <li>Privacidade de Proteção de Dados (LGPD) 4 horas - Senai.</li>
            </ul>
          </div>
        </div>
        <div className="experiencias">
          <h2 className="experiencias-h2">EXPERIÊNCIAS</h2>
          <div className="experiencias-lista">
            <ul>
              <li>
                Monitor de Análise e Desenvolvimento de Sistemas - Uninter;
              </li>
              <li>Técnico Eletrônico - Imply;</li>
              <li>Técnico Instalador de Infraestrutura de Redes - Valere.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="experience-h2">
          <h2>Tempo de Estudos</h2>
        </div>
        <div className="experience-time">
          <div className="experience-language">
            <img
              src={imgUrls.js}
              alt="Javascript Logo"
              className="img-estilo"
            />
            <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span>18 meses</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <img src={imgUrls.html} alt="HTML Logo" className="img-estilo" />
            <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span>18 meses</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <img src={imgUrls.css} alt="CSS Logo" className="img-estilo" />
            <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span>18 meses</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <img
              src={imgUrls.python}
              alt="Python Logo"
              className="img-estilo"
            />
            <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span>18 meses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMim;
