import React from 'react'
import './Footer.css'
import logo__movicun from '../../assets/images/Header/logo-cancun.png'

const Footer = () => {
  return (
    <footer className="footer">
            <div className="container__footer">
                <div className="content__footer">
                    <div className="footer__jllc">
                        <div className="footer__jllc-item">
                            <img src={logo__movicun} alt="Logo de la Empresa" />
                            <h2>Movi</h2>
                        </div>
                    </div>
                    <div className="legal">
                        <h4>Legales</h4>
                        <p>Ubicación</p>
                        <p>Ayuda</p>
                        <p>Contacto</p>
                        <p>Administracion</p>
                    </div>
                    <div className="contact">
                        <h4>Contacto</h4>
                        <div className="contact__item">
                            <i className="fa-brands fa-whatsapp"></i>
                            <p>+52 998 486 9828</p>
                        </div>
                        <div className="contact__item">
                            <i className="fa-solid fa-envelope"></i>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="contact__item">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Cancún Quintana Roo, México</p>
                        </div>
                    </div>
                    <div className="social__networks">
                        <h4>Redes Sociales</h4>
                        <div className="social__networks-item">
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
                <div className="final__foot">
                    <div>
                        <h5>Gobierno Municipal de Benito Juárez.</h5>
                        <small>Ayuntamiento de Benito Juárez, Administración 2022-2024.</small>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
