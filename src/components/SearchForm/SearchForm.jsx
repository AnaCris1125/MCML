import React, { useState } from 'react';
import './SearchForm.css';


function SearchForm({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };



  return (
    <section className="search-section">
      <div className='overlay'>
      <h1 className="search-title">Transformamos espacios con elegancia y precisión</h1>
      <p className='search-paragraph'>Soluciones en construcción, diseno y remodelaciones</p>
      <a href="/proyectos" className="search-button">Nuestros proyectos</a>
      </div>
    </section>
  );
}

export default SearchForm;