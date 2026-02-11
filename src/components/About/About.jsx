import React from 'react';
import './About.css';
import iconoPlanificacion from "../../images/planear.svg";
import iconoEjecucion from "../../images/ejecutar.svg";
import iconoDiseño from "../../images/diseñar.svg";



function About() {
  return (
    <section className="about">
       <div className='about__content'>
       <p className='title-about'>Nuestros servicios</p>
       <div className='servicios__container'>
        <div className='servicios__container-list'>
          <div className='icono-box'>
          <img className='icono' src={iconoPlanificacion} alt="Icono Planificación" />
          </div>     
       <h3 className='title-container'>Planificación</h3>
       <p className='descrption-container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero commodi assumenda, placeat nemo tempore quidem odio harum pariatur amet maxime dignissimos, voluptatum atque delectus ad accusantium alias? Numquam, ratione!</p>
        </div>
       <div className='servicios__container-list'>
        <div className='icono-box'>
        <img className='icono' src={iconoEjecucion} alt="Icono Ejecución" />
        </div>
       <h3 className='title-container'>Ejecución</h3>
       <p className='descrption-container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero commodi assumenda, placeat nemo tempore quidem odio harum pariatur amet maxime dignissimos, voluptatum atque delectus ad accusantium alias? Numquam, ratione!</p>
       </div>
       <div className='servicios__container-list'>
        <div className='icono-box'>
        <img className='icono' src={iconoDiseño} alt="Icono Diseño" />
        </div>
       <h3 className='title-container'>Diseño</h3>
       <p className='descrption-container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero commodi assumenda, placeat nemo tempore quidem odio harum pariatur amet maxime dignissimos, voluptatum atque delectus ad accusantium alias? Numquam, ratione!</p>
       </div>
       </div>
       </div>
    </section>
  );
}

export default About;