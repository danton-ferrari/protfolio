import "./Footer.css";
import { useState, useEffect } from "react";
import emailImage from "../components/o-email.png";
import downloadImage from "../components/download-direto.png";
import whatsImage from "../components/whatapp_icone.png";
import pdf from "../components/dantonFerrariCV.pdf";

function Footer() {
  const [imgUrls, setImgUrls] = useState({});

  useEffect(() => {
    setImgUrls({
      email: emailImage,
      download: downloadImage,
      whats: whatsImage,
    });
  }, []);

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
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#sobre-mim">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col col-social">
          <ul className="social">
            <a href="https://www.instagram.com/danton.ferrari/" target="_blank">
              <li className="tooltip">
                <i className="fa-brands fa-instagramgit add"></i>
                <span className="tooltiptext">Instagram</span>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/danton-ferrari/"
              target="_blank"
            >
              <li className="tooltip">
                <i className="fa-brands fa-linkedin-in"></i>
                <span className="tooltiptext">Linkedin</span>
              </li>
            </a>
            <a href="https://twitter.com/FerrariDanton" target="_blank">
              <li className="tooltip">
                <i className="fa-brands fa-x-twitter"></i>
                <span className="tooltiptext">Twitter</span>
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
                <img src={imgUrls.email} alt="Email" />
                <span className="tooltiptext">Email</span>
              </a>
            </li>
            <li className="tooltip">
              <a
                id="pdfDownloadLink"
                href={pdf}
                target="_blank"
                download="../components/dantonFerrariCV.pdf"
              >
                <img src={imgUrls.download} alt="Download CV" />
                <span className="tooltiptext">Baixe meu currículo</span>
              </a>
            </li>
            <li className="tooltip">
              <a
                className="tel"
                href="https://wa.me/55051980363331"
                target="_blank"
              >
                <img src={imgUrls.whats} alt="WhatsApp" />
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
