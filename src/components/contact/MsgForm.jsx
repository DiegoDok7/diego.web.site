import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const MsgForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Reemplaza estos valores con los de tu cuenta EmailJS
      const serviceID = 'service_4r65vi7';
      const templateID = 'template_vhwtv28';
      const publicKey = 'H5mpOgQYUdvLjBhwp';

      await emailjs.send(
        serviceID,
        templateID,
        formData,
        publicKey
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="salv-message-me">
        <h4 className="salv-about-personla-title mb-0 w-text sm-md-font inter-font-700 dark-about-personal-title">
          Envíame un mensaje
        </h4>
        <div className="salv-message-me row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 map-contact-form-col">
            <div className="formbold-main-wrapper">
              <div className="formbold-form-wrapper">
                <form
                  onSubmit={handleSubmit}
                  className="salv-conatct-us dark-conatct-form"
                >
                  <div className="formbold-mb-5 salv-contact-field dark-contact-field">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nombre"
                      className="formbold-form-input inter-font-500"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <span className="salv-field-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_101_727)">
                          <path
                            d="M2 18C2 16.1814 2.72245 14.4372 4.00841 13.1513C5.29437 11.8653 7.03852 11.1429 8.85714 11.1429C10.6758 11.1429 12.4199 11.8653 13.7059 13.1513C14.9918 14.4372 15.7143 16.1814 15.7143 18H14C14 16.636 13.4582 15.3279 12.4937 14.3635C11.5292 13.399 10.2211 12.8571 8.85714 12.8571C7.49317 12.8571 6.18507 13.399 5.22059 14.3635C4.25612 15.3279 3.71429 16.636 3.71429 18H2ZM8.85714 10.2857C6.01571 10.2857 3.71429 7.98429 3.71429 5.14286C3.71429 2.30143 6.01571 0 8.85714 0C11.6986 0 14 2.30143 14 5.14286C14 7.98429 11.6986 10.2857 8.85714 10.2857ZM8.85714 8.57143C10.7514 8.57143 12.2857 7.03714 12.2857 5.14286C12.2857 3.24857 10.7514 1.71429 8.85714 1.71429C6.96286 1.71429 5.42857 3.24857 5.42857 5.14286C5.42857 7.03714 6.96286 8.57143 8.85714 8.57143Z"
                            fill="#ffffff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_101_727">
                            <rect width="18" height="18" fill="#ffffff" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="salv-input-bar-line"></div>
                  </div>
                  <div className="formbold-mb-5 salv-contact-field dark-contact-field">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="formbold-form-input inter-font-500"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="salv-input-bar-line"></div>
                    <span className="salv-field-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_101_734)">
                          <path
                            d="M0.9 1H17.1C17.3387 1 17.5676 1.09482 17.7364 1.2636C17.9052 1.43239 17.3387 1.66131 18 1.9V16.3C18 16.5387 17.9052 16.7676 17.7364 16.9364C17.5676 17.1052 17.3387 17.2 17.1 17.2H0.9C0.661305 17.2 0.432387 17.1052 0.263604 16.9364C0.0948211 16.7676 0 16.5387 0 16.3V1.9C0 1.66131 0.0948211 1.43239 0.263604 1.2636C0.432387 1.09482 0.661305 1 0.9 1ZM16.2 4.8142L9.0648 11.2042L1.8 4.7944V15.4H16.2V4.8142ZM2.2599 2.8L9.0549 8.7958L15.7518 2.8H2.2599Z"
                            fill="#ffffff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_101_734">
                            <rect width="18" height="18" fill="#ffffff" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="formbold-mb-5 salv-contact-field dark-contact-field">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Asunto"
                      className="formbold-form-input inter-font-500"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <div className="salv-input-bar-line"></div>
                    <span className="salv-field-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_101_741)">
                          <path
                            d="M12.7487 6.66761L11.3324 5.25131L2.00325 14.5805V15.9967H3.41955L12.7487 6.66761ZM14.165 5.25131L15.5813 3.83501L14.165 2.41871L12.7487 3.83501L14.165 5.25131ZM4.2489 18H0V13.7501L13.4568 0.293263C13.6447 0.105487 13.8994 0 14.165 0C14.4306 0 14.6853 0.105487 14.8731 0.293263L17.7067 3.12686C17.8945 3.31469 18 3.56942 18 3.83501C18 4.10061 17.8945 4.35533 17.7067 4.54316L4.2499 18H4.2489Z"
                            fill="#ffffff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_101_741">
                            <rect width="18" height="18" fill="#ffffff" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="formbold-mb-5 salv-contact-field dark-contact-field">
                    <textarea
                      rows="4"
                      cols="12"
                      name="message"
                      id="message"
                      placeholder="Mensaje"
                      className="formbold-form-input inter-font-500"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <div className="salv-input-bar-line textarea-line"></div>
                    <span className="salv-field-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_101_748)">
                          <path
                            d="M14.3102 9.1406L13.6288 8.45926L4.08807 18H0V13.911L10.9025 3.00754L16.3542 8.45926C16.5349 8.63998 16.6363 8.88506 16.6363 9.1406C16.6363 9.39614 16.5349 9.64122 16.3542 9.82194L9.54074 16.6363L8.17709 15.2737L14.3102 9.1406ZM12.2661 7.09657L10.9025 5.73388L1.92742 14.7089V16.0726H3.29011L12.2661 7.09657ZM14.9915 0.282162L17.7178 3.00754C17.8985 3.18826 18 3.43334 18 3.68888C18 3.94442 17.8985 4.1895 17.7178 4.37023L16.3542 5.73388L12.2661 1.64485L13.6288 0.282162C13.8095 0.101494 14.0546 0 14.3102 0C14.5657 0 14.8108 0.101494 14.9915 0.282162Z"
                            fill="#ffffff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_101_748">
                            <rect width="18" height="18" fill="#ffffff" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="formbold-mb-5" style={{ color: 'green' }}>
                      ¡Mensaje enviado con éxito!
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="formbold-mb-5" style={{ color: 'red' }}>
                      Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </div>
                  )}
                  
                  <div>
                    <button 
                      className="salv-home-get-touch dark-salv-cont-get-touch salv-send-btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span className="salv-get-text salv-get-text-btn">
                        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 map-img-col">
            <div className="salv-contat-us-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3079.8719162276666!2d-0.3402222!3d39.4722222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDI4JzIwLjAiTiAwwrAyMCcyNC44Ilc!5e0!3m2!1ses!2ses!4v1742998924417!5m2!1ses!2ses"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MsgForm;