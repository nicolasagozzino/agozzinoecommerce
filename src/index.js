// Import <algo> from "ruta relativa/ruta paquete"

// Trae la libreria de React
import React from 'react';
 
// Traigo la libreria de React DOM
import ReactDOM from 'react-dom/client';

// Agarrar una app que ya exista de React 

/* 
function App () {
  return "Hola Mundo"
}
*/

import Ecommerce from './Ecommerce';

import "./styles.css"

//Mostrar la APP en el DOM. 



//Crea un punto inicial (root) en donde la App se va a montar (Dibujar)

const root = ReactDOM.createRoot(document.getElementById('root'));

// Se muestra la app 

root.render(
  <React.StrictMode>
    <Ecommerce />
  </React.StrictMode>
);



































/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

