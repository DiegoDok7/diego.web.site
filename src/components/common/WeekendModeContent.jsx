import React, { useState } from "react";
import { Link } from "react-router-dom";

const WeekendModeContent = () => {
  const [isWeekendMode, setIsWeekendMode] = useState(false);

  const handleWeekendModeClick = () => {
    setIsWeekendMode((prevMode) => !prevMode);

    if (!isWeekendMode) {
      // If weekend mode is enabled
      // Add hidepage className and remove showpage className from various elements
      const elementsToHide = document.querySelectorAll(
        ".salva-project-detail, .salva-portfolio-content, .salva-image-page, .salva-soundcloud-page, .salva-vimeo-content, .salva-youtube-video-page, .salva-home-main-content, .weekend-mode-hide, .salva-slider-page"
      );
      elementsToHide.forEach((element) => {
        element.classNameList.add("hidepage");
        element.classNameList.remove("showpage");
      });
    } else {
      // If weekend mode is disabled
      // Remove showpage className from .salva-project-detail and .salva-single-news-content
      const elementsToShow = document.querySelectorAll(
        ".salva-project-detail, .salva-single-news-content"
      );
      elementsToShow.forEach((element) =>
        element.classNameList.remove("showpage")
      );

      // Remove hidepage className from .salva-portfolio-content, .salva-home-main-content, and .weekend-mode-hide
      const elementsToUnhide = document.querySelectorAll(
        ".salva-portfolio-content, .salva-home-main-content, .weekend-mode-hide"
      );
      elementsToUnhide.forEach((element) =>
        element.classNameList.remove("hidepage")
      );
    }

    // Toggle classNamees for .salva-weekend-mode, .salva-home-image, and .salva-weekend-image
    document
      .querySelector(".salva-weekend-mode")
      .classNameList.toggle("showpage");
    document
      .querySelector(".salva-home-image")
      .classNameList.toggle("showpage");
    document
      .querySelector(".salva-weekend-image")
      .classNameList.toggle("visible-img");
  };

  return (
    <>
      <div
        className={`salva-weekend-mode ${isWeekendMode ? "checked" : ""}`}
        id="weekend_mode"
      >
        <div className="salv-inrto-content">
          <h5 className="salv-about-title salv-home-title md-font w-text inter-font-900 mb-0">
            En mi tiempo libre 😎
          </h5>
        </div>
        <div className="salv-week-desc">
          <p className="mt-0 mb-0 sal-week-desc-one inter-font-400 sm-md-font-two">
            En mi tiempo libre, me encanta disfrutar de la escalada en roca y los deportes al aire libre.
            No hay nada como el reto físico de escalar una pared o caminar por un sendero, siempre rodeado de
            la paz que ofrece la naturaleza.
          </p>
          <p className="mb-0 mt-0 sal-week-desc-two inter-font-400 sm-md-font-two">
            Además, me apasiona aprender idiomas, porque creo que cada idioma
            abre una puerta a una nueva forma de ver el mundo y conectarme con otras personas
          </p>
          <p className="mt-0 mb-0 sal-week-desc-three inter-font-400 sm-md-font-two">
            También toco el ukelele, algo que me relaja y me permite expresar emociones a través de la música. 
            Estos momentos me ayudan a desconectar, recargar energías y mantenerme conectado con lo 
            que realmente me gusta.
          </p>
        </div>
        <div className="salv-drop-mail">
          <div className="salv-drop-mail-wrap">
            <h6 className="mb-0 drop-mail-title inter-font-400 w-text">
              Envíame un mail a:
            </h6>
            <Link
              style={{ color: "white" }}
              to="ddj.alarcon@gmail.com"
              className="salv-mail-text inter-font-900 w-text"
            >
              &nbsp;ddj.alarcon@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default WeekendModeContent;
