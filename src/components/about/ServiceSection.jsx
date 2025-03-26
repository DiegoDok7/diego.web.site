import React from "react";

const ServiceSection = () => {
  return (
    <>
      <div className="salv-about-service">
        <h5 className="salv-about-personla-title mb-0 w-text dark-about-personal-title sm-md-font inter-font-700">
          Habilidades
        </h5>
        <div className="row salv-service-card">
          <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col service-card-two">
            <div className="card1 service-card-wrap dark-service-card">
              <div className="service-icon">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.375 7.5H17.625C15.0938 7.5 13.125 9.53906 13.125 12V39C13.125 41.5312 15.0938 43.5 17.625 43.5H33.375C35.8359 43.5 37.875 41.5312 37.875 39V12C37.875 9.53906 35.8359 7.5 33.375 7.5ZM25.5 41.25C24.2344 41.25 23.25 40.2656 23.25 39C23.25 37.8047 24.2344 36.75 25.5 36.75C26.6953 36.75 27.75 37.8047 27.75 39C27.75 40.2656 26.6953 41.25 25.5 41.25ZM33.375 12V34.5H17.625V12H33.375Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <h6 className="service-title sm-md-font w-text inter-font-500 mb-0">
                Gestión de proyectos
              </h6>
              <p className="small service-desc dark-sec-color inter-font-400 mb-0">
                Gestión de proyectos de desarrollo de software, seguimiento y
                control de tareas.
              </p>
              <div className="go-corner">
                <div className="go-arrow"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col">
            <div className="card1 service-card-wrap dark-service-card">
              <div className="service-icon">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9688 28.5703L9.78906 26.3906C9.22656 25.8281 9.01562 24.9844 9.22656 24.1406C9.4375 23.5078 9.71875 22.7344 10.0703 21.75H2.6875C2.05469 21.75 1.49219 21.4688 1.21094 20.9062C0.859375 20.4141 0.859375 19.7812 1.21094 19.2188L4.86719 13.0312C5.78125 11.4844 7.46875 10.5 9.22656 10.5H15.0625C15.2031 10.2188 15.3438 10.0078 15.5547 9.72656C21.3203 1.21875 29.8984 0.9375 34.9609 1.92188C35.8047 2.0625 36.4375 2.69531 36.5781 3.53906C37.5625 8.60156 37.2812 17.1797 28.7734 22.9453C28.4922 23.1562 28.2109 23.2969 28 23.4375V29.2734C28 31.0312 27.0156 32.7188 25.4688 33.6328L19.2812 37.2891C18.7188 37.5703 18.0859 37.6406 17.5938 37.2891C17.0312 37.0078 16.75 36.4453 16.75 35.8125V28.2891C15.6953 28.6406 14.8516 28.9219 14.2188 29.1328C13.4453 29.4141 12.5312 29.2031 11.9688 28.5703ZM28 13.3125C29.5469 13.3125 30.8125 12.1172 30.8125 10.5C30.8125 8.95312 29.5469 7.6875 28 7.6875C26.3828 7.6875 25.1875 8.95312 25.1875 10.5C25.1875 12.1172 26.3828 13.3125 28 13.3125Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <h6 className="service-title sm-md-font w-text inter-font-500 mb-0">
                Análisis de datos
              </h6>
              <p className="small service-desc dark-sec-color inter-font-400 mb-0">
                Análisis de datos, visualización de datos, creación de
                informes y dashboards.
              </p>
              <div className="go-corner">
                <div className="go-arrow"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-dm-6 col-md-4 col-lg-4 service-card-col">
            <div className="card1 service-card-wrap dark-service-card dark-service-card">
              <div className="service-icon">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 14.25H39V32.25H43.5V13.125C43.5 11.2969 41.9531 9.75 40.125 9.75H10.875C8.97656 9.75 7.5 11.2969 7.5 13.125V32.25H12V14.25ZM46.875 34.5H4.125C3.49219 34.5 3 35.0625 3 35.625V36.75C3 39.2812 4.96875 41.25 7.5 41.25H43.5C45.9609 41.25 48 39.2812 48 36.75V35.625C48 35.0625 47.4375 34.5 46.875 34.5ZM28.6641 27.6797C28.9453 27.9609 29.2969 28.0312 29.7188 28.0312C30.0703 28.0312 30.4219 27.9609 30.7031 27.6797L34.0781 24.3047C34.5703 23.7422 34.5703 22.8281 34.0781 22.2656L30.7031 18.8906C30.1406 18.3984 29.2266 18.3984 28.6641 18.8906C28.1719 19.4531 28.1719 20.3672 28.6641 20.9297L31.0547 23.25L28.6641 25.6406C28.1719 26.2031 28.1719 27.1172 28.6641 27.6797ZM22.2656 18.8906C21.7031 18.3984 20.7891 18.3984 20.2266 18.8906L16.8516 22.2656C16.3594 22.8281 16.3594 23.7422 16.8516 24.3047L20.2266 27.6797C20.5078 27.9609 20.8594 28.0312 21.2812 28.0312C21.6328 28.0312 21.9844 27.9609 22.2656 27.6797C22.7578 27.1172 22.7578 26.2031 22.2656 25.6406L19.875 23.25L22.2656 20.9297C22.7578 20.3672 22.7578 19.4531 22.2656 18.8906Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <h6 className="service-title sm-md-font w-text inter-font-500 mb-0">
                Desarrollo web
              </h6>
              <p className="small service-desc dark-sec-color inter-font-400 mb-0">
                Desarrollo de páginas web, integraciones, mantenimiento y
                soporte técnico.
              </p>
              <div className="go-corner">
                <div className="go-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceSection;