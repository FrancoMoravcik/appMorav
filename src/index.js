import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';

import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home.js';
import Peliculas from './components/peliculas/Peliculas.js'
import Series from './components/series/Series.js'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 

      <BrowserRouter>

          <NavBar></NavBar>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/movies' element={<Peliculas/>}/>
          <Route exact path='/series' element={<Series/>}/>
        </Routes>

      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();