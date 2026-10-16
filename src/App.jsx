import './App.css'
//import '/src/data/ /data/database'
import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Header from './components/Header'
import Footer from './components/Footer';
const CalcPreseleccion = lazy(()=> import('./components/CalcPreseleccion'))
const CalcSeleccion = lazy(()=> import('./components/CalcSeleccion'))
const SobreMi = lazy(()=> import('./components/SobreMi'))

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/preseleccion' 
          element={
            <Suspense fallback={<div>Cargando Calculadora de Pre-Selección</div>}>
              <CalcPreseleccion/>
            </Suspense>
          }
        />
        <Route path='/seleccion' 
          element={
            <Suspense fallback={<div>Cargando Calculadora de Selección</div>}>
              <CalcSeleccion/>
            </Suspense>
          } 
        />
        <Route path='/sobre-mi'
          element={
            <Suspense fallback={<div>Cargando…</div>}>
              <SobreMi/>
            </Suspense>
          }
        />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
