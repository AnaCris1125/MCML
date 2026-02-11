import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Fondo from "../../images/imagen-fondo-app.jpg";

function Main({ isLoggedIn, userName }) {
  return (
    <>
      <main className='content' style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100%',  }}>
        <SearchForm />
        <About />
      </main>
    </>
  );
}

export default Main;
