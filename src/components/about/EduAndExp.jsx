import React from "react";

const EduAndExp = () => {
  return (
    <>
      <div className="salv-about-edu-expr">
        <div className="row sal-about-eduction-row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 salv-eduction-col">
            <h6 className="salv-about-personla-title mb-0 w-text dark-about-personal-title sm-md-font inter-font-700 mb-0">
              Educación
            </h6>
            <div className="about-educ-card-wrap">
              <div className="eduction-card edu-card-one dark-edu-card">
                <div className="year-edu-className">
                  <div className="educ-year">2023 - 2024</div>
                  <p className="about-edu-title sm-md-font w-text inter-font-500 mb-0">
                    Máster en Big Data & Analytics
                  </p>
                </div>
                <div className="about-desc sm-font-two inter-font-400 dark-sec-color">
                  Máster en Big Data & Analytics en la escuela EAE Business
                  School.
                </div>
              </div>
              <div className="eduction-card edu-card-two dark-edu-card">
                <div className="year-edu-className">
                  <div className="educ-year">2016 - 2021</div>
                  <p className="about-edu-title sm-md-font w-text inter-font-500 mb-0">
                    Grado en Ingeniería Empresarial
                  </p>
                </div>
                <div className="about-desc sm-font-two inter-font-400 dark-sec-color">
                  Grado en la facultad de Ingeniería en la Universidad del Pacífico - Lima, Perú
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 salv-experience-col">
            <h6 className="salv-about-personla-title mb-0 w-text dark-about-personal-title sm-md-font inter-font-700 mb-0">
              Experiencia
            </h6>
            <div className="about-educ-card-wrap">
              <div className="eduction-card edu-card-two dark-edu-card">
                <div className="year-edu-className">
                  <div className="educ-year">Oct 2024 - Actualidad</div>
                  <p className="about-edu-title sm-md-font w-text inter-font-500 mb-0">
                    Project Manager & Software Developer
                  </p>
                </div>
                <div className="about-desc sm-font-two inter-font-400 dark-sec-color">
                  Startup tecnológica dedicada a ofrecer servicios de desarrollo de software
                  personalizado, staff augmentation, integraciones, soluciones analíticas y
                  desarrollo de MVP.
                </div>
              </div>
              <div className="eduction-card edu-card-one dark-edu-card">
                <div className="year-edu-className">
                  <div className="educ-year">Dic 2022 - Jul 2024</div>
                  <p className="about-edu-title sm-md-font w-text inter-font-500 mb-0">
                    Gestor de Servicios y Consultoría
                  </p>
                </div>
                <div className="about-desc sm-font-two inter-font-400 dark-sec-color">
                  Seidor Perú - Firma de consultoría tecnológica que ofrece un portafolio
                  integral de soluciones y servicios en innovación, experiencia del cliente,
                  ERP, análisis, experiencia del empleado, nube, lugar de trabajo y ciberseguridad.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EduAndExp;