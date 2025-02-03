// import { Mail } from "lucide-react";
import "./Footer.css";
import pdf from "../components/dantonFerrariCV.pdf";

function Footer() {
  return (
    <div className="footer">
      <div className="waves">
        <div className="wave" id="wave"></div>
        <div className="wave" id="wave"></div>
        <div className="wave" id="wave"></div>
        <div className="wave" id="wave"></div>
      </div>
      <div className="row">
        <div className="col footerbar">
          <ul>
            <li>
              <a href="#header">Início</a>
            </li>
            <li>
              <a href="#sobre-mim">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#footer">Contato</a>
            </li>
          </ul>
        </div>
        <div className="col col-social">
          <ul className="social">
            <a
              href="https://www.linkedin.com/in/danton-ferrari/"
              target="_blank"
            >
              <li className="tooltip">
                <i className="fa-brands fa-linkedin-in"></i>
                <span className="tooltiptext">Linkedin</span>
              </li>
            </a>
            <a href="https://github.com/danton-ferrari" target="_blank">
              <li className="tooltip">
                <i className="fa-brands fa-github"></i>
                <span className="tooltiptext">GitHub</span>
              </li>
            </a>
            <li className="tooltip">
              <a href="mailto:dgabrielferrari7@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope"></i>
                <span className="tooltiptext">Email</span>
              </a>
            </li>
            <li className="tooltip">
              <a
                id="pdfDownloadLink"
                href={pdf}
                target="_blank"
                download="Currículo Danton Ferrari 2025"
              >
                <i className="fa-solid fa-file"></i>
                <span className="tooltiptext">Baixe meu currículo</span>
              </a>
            </li>
            <li className="tooltip">
              <a
                className="tel"
                href="https://wa.me/55051980363331"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span className="tooltiptext">WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p">
        <p>&copy; 2024 || All Rights Received By Danton Ferrari</p>
      </div>
    </div>
  );
}

export default Footer;
