import React from 'react';
import './Footer.css';
import phone from "../../images/phone.svg";
import mail from "../../images/mail.svg";
import location from "../../images/location.svg";
import linkedin from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__container'>
        <p className='footer-title'>Contáctanos</p>
        <div className='footer__container-list'>
          <div className='footer__icon-circle'>
          <img className='footer__icon' src={phone} alt="icono phone" />
          </div>
        <p className='footer__description'>+57 317 6757158</p>
        </div>
        <div className='footer__container-list'>
          <div className='footer__icon-circle'>
          <img className='footer__icon' src={mail} alt="icono mail" />
          </div>
        <p className='footer__description'>mcmproyectoscol@gmail.com</p>
        </div>
        <div className='footer__container-list'>
          <div className='footer__icon-circle'>
          <img className='footer__icon' src={linkedin} alt="icono linkedin" />
          </div>
          <a className='footer__description'
          href="https://www.linkedin.com/in/mmejia-lalinde"
          target="_blank"
          rel="noopener noreferrer"
        >Linkedin</a>
        </div>
        <div className='footer__container-list'>
          <div className='footer__icon-circle'>
          <img className='footer__icon' src={instagram} alt="icono instagram" />
          </div>
          <a className='footer__description'
          href="https://www.instagram.com/mariaclaramejialalinde"
          target="_blank"
          rel="noopener noreferrer"
        >Instagram</a>
        </div>
       <div className='footer__container-list'>
        <div className='footer__icon-circle'>
        <img className='footer__icon' src={location} alt="icono de location" />
        </div>
       <p className='footer__description'>Bogotá - Colombia</p>
       </div>
      </div>
    </footer>
  )
}

export default Footer