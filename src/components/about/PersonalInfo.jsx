import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () =>
{
    return (
      <>
        <div className="salv-about-personal">
          <h3 className="salv-about-personla-title dark-about-personal-title mb-0 w-text sm-md-font inter-font-700">
            Información personal
          </h3>
          <div className="row personal-info-row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 personal-first-col">
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Nombre:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  Diego
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Apellidos:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  Alarcón Alba
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Residencia:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  Valencia, España
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Edad:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  27 años
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 personal-second-col">
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Estudios:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  EAE Business School Madrid
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Grado:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  {" "}
                  Master en Big Data & Analytics
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  E-Mail:
                </span>
                <span className="pers-info-title">
                  <Link
                    to="mailto:ddj.alarcon@gmail.com"
                    className="dark-sec-color sm-md-font inter-font-400 links m-2"
                  >
                    ddj.alarcon@gmail.com
                  </Link>
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Teléfono:
                </span>
                <span className="pers-info-title">
                  <Link
                    to="tel:+34695384318"
                    className="dark-sec-color sm-md-font inter-font-400 links m-2"
                  >
                    +34 695 38 43 18
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default PersonalInfo;
