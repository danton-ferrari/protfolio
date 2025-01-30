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
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/danton-ferrari/"
              target="_blank"
            >
              <li>
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
            </a>
            <a href="https://twitter.com/FerrariDanton" target="_blank">
              <li>
                <i className="fa-brands fa-x-twitter"></i>
              </li>
            </a>
            <a href="https://github.com/danton-ferrari" target="_blank">
              <li>
                <i className="fa-brands fa-github"></i>
              </li>
            </a>
            <li>
              <a href="mailto:dgabrielferrari7@gmail.com" target="_blank">
                <img src={imgUrls.email} alt="" />
              </a>
            </li>
            <li>
              <a
                id="pdfDownloadLink"
                href={pdf}
                target="_blank"
                download="../components/dantonFerrariCV.pdf"
              >
                <img src={imgUrls.download} alt="" />
              </a>
            </li>
            <li>
              <a
                className="tel"
                href="https://wa.me/55051980363331"
                target="_blank"
              >
                <img src={imgUrls.whats} alt="" />
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
