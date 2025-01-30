import { useState, useEffect } from "react";
import "./Services.css";
import ifoodImage from "../components/ifood.png";
import githubImage from "../components/github2.png";
import gerenciadorImage from "../components/GerenciadorDeTarefas.jpg";
import readmeImage from "../components/readmeD.png";

function Services() {
  const [imgUrls, setImgUrls] = useState({});

  useEffect(() => {
    setImgUrls({
      ifood: ifoodImage,
      github: githubImage,
      gerenciador: gerenciadorImage,
      readme: readmeImage,
    });
  }, []);

  return (
    <div className="body">
      <ul className="accordion">
        <li>
          <img src={imgUrls.ifood} />
          <div className="content">
            <span>
              <a
                href="https://www.figma.com/proto/cXBwlWM1phfkXTFNBhAKCn/Trabalho-Design-de-Intera%C3%A7%C3%A3o?type=design&node-id=170-10390&t=qJZxOiO57b58XNnt-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=170%3A10390&mode=design"
                target="_blank"
              >
                Projeto Ifood
              </a>
              <p>Figma</p>
            </span>
          </div>
        </li>
        <li>
          <img src={imgUrls.github} />
          <div className="content">
            <span>
              <a
                href="https://github.com/danton-ferrari/danton-ferrari"
                target="_blank"
              >
                Projeto Readme
              </a>
              <p>Github</p>
            </span>
          </div>
        </li>
        <li>
          <img src={imgUrls.gerenciador} />
          <div className="content">
            <span>
              <a
                href="https://github.com/danton-ferrari/curso-de-react-yt.git"
                target="_blank"
              >
                Gerenciador de Tarefas
              </a>
              <p>React</p>
            </span>
          </div>
        </li>
        <li>
          <img src={imgUrls.readme} />
          <div className="content">
            <span>
              <a
                href="https://github.com/danton-ferrari/danton-ferrari"
                target="_blank"
              >
                Portfólio Readme
              </a>
              <p>Readme</p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Services;
