import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
    <div className="footerdiv">
      <a href="https://github.com/Divya-rajavat">
        <i className="fa fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/divya-rajavat-430383281/">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/.divya.rajavat.08?utm_source=qr&igsh=aTBpdHU2Z2I3dDEx/">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com/channel/UChl0RzN1LENGk2MwegBQ5Ew">
        <i className="fa fa-youtube"></i>
      </a>
    </div>
    <div className="copyright">
      <p>Designed and developed by Divya Rajavat &#169; 2023. All rights reserved </p>
    </div>
  </div>
  );
};

export default Footer;
