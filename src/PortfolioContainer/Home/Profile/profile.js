import React from "react";
import Typical from "react-typical";
import { Document, pdfjs } from "react-pdf";
import "./Profile.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Profile = () => {
  const pdfPath = require("../../../assets/Home/Divya-cv.pdf");

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Divya</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    2000,
                    "Mern Stack Developer",
                    2000,
                    "React/React Native Developer",
                    2000,
                    "Ethusiastic Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              onClick={() => window.open(pdfPath, "_blank")}
              className="btn highlighted-btn">
              Get Resume
            </button>
            <Document file={pdfPath}></Document>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
