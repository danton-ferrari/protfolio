import { useState, useEffect } from "react";
import myImage from "../components/Me.png";
import "./Header.css";

function Headers() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setImgUrl(myImage);
  }, []);

  return (
    <div className="header hidden">
      <div className="header-h1-1">
        <h1>Danton Ferrari</h1>
      </div>
      <div className="header-h1-2">
        <h1>&lt;Software Developer/&gt;</h1>
      </div>
      <div className="nada"></div>
      <div className="header-img">
        <img id="eu" src={imgUrl} />
      </div>
    </div>
  );
}

export default Headers;
