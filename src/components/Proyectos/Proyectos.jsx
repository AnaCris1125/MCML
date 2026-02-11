import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
import news from "../../images/news.JPEG";
import around from "../../images/around.JPEG";
import mcml from "../../images/mcml.JPEG";

function Proyectos() {
    return (
      <section className='section__card-projects'>
        <div className='project__card-list'>
          <div className='project__card'> 
            <img className='project__card_img' src={news} alt="imagen pagina news" />
            <div className="card__overlay"></div> 
            <div className="project__card_content">
            <h3 className='project__card_title'>Proyecto 1</h3>
            <p className='project__card_paragraph1'>
              Aplicación fullstack para buscar, guardar y gestionar artículos
              de noticias con autenticación.
            </p>
            <p className='project__card_paragraph2'>React · Node · Express · MongoDB · JWT</p>
            </div>    
            </div>
          <div className='project__card'>
          <img className='project__card_img' src={around} alt="Imagen around" />
          <div className="card__overlay"></div> 
          <div className="project__card_content">
          <h3 className='project__card_title'>Proyecto 2</h3>
            <p className='project__card_paragraph1'>
              Aplicación interactiva para compartir imágenes utilizando React
              y consumo de APIs.
            </p>
            <p className='project__card_paragraph2'>React · JavaScript · CSS</p>
          </div>    
          </div>
          <div className='project__card'>
            <img className='project__card_img' src={mcml} alt="imagen pagina mcml" />
            <div className="card__overlay"></div> 
            <div className="project__card_content">
            <h3 className='project__card_title'>Proyecto 3</h3>
            <p className='project__card_paragraph1'>
              Sitio web corporativo diseñado y desarrollado para una empresa
              del sector construcción.
            </p>
            <p className='project__card_paragraph2'>HTML · CSS · JavaScript</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Proyectos;
