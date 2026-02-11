import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import Proyectos from './components/Proyectos/Proyectos';
import Servicios from './components/Servicios/Servicios';
import Nosotros from './components/Nosotros/Nosotros';

function App() {
  return (
    <Routes>
      {/* Página de inicio: Header + Main + Footer */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Inicio />  
            <Footer />
          </>
        }
      />

      {/* Página de servicios */}
      <Route
        path="/servicios"
        element={
          <>
            <Header />
            <Servicios />
           
          </>
        }
      />

      {/* Página de nosotros */}
      <Route
        path="/nosotros"
        element={
          <>
            <Header />
            <Nosotros />
           
          </>
        }
      />

      {/* Página de proyectos: solo los proyectos, sin Header ni Footer */}
      <Route
        path="/proyectos"
        element={
          <>
            <Header />
            <Proyectos />
           
          </>
        }
      />
    </Routes>
  );
}

export default App;





// import React from 'react';
// import { Route, Routes, Link } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Main from './components/Main/Main';
// import Proyectos from './components/Proyectos/Proyectos';
// import Footer from './components/Footer/Footer';
// import Servicios from './components/Servicios/Servicios';
// import Nosotros from './components/Nosotros/Nosotros';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Routes>
//         <Route path="/proyectos" element={<Proyectos />} />
//         <Route path="/servicios" element={<Servicios />} />
//         <Route path="/nosotros" element={<Nosotros />} />
//       </Routes>
//       <Footer />

//     </>
//   )
// }

// export default App;

