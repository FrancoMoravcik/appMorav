import './Home.css'
import React, { useRef } from 'react';

import Buscador from '../buscador/Buscador'

import { Icon } from '../icon/Icon';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'

const Home = () => {

 /* ESTADO Y FETCH --> peliculas */

  const [peliculas, setPeliculas] = useState ([])

useEffect(() => {
  fetch('/data/peliculas.json')
.then(res => res.json())
.then(data => setPeliculas(data))
}, [])

const filaRef = useRef(null);

const flechaDerecha = () => {
  if (filaRef.current) {
    filaRef.current.scrollLeft += filaRef.current.offsetWidth;
  }
};

const flechaIzquierda = () => {
  if (filaRef.current) {
    filaRef.current.scrollLeft -= filaRef.current.offsetWidth;
  }
};


return (
  <main className='mainHome'>

    <Buscador></Buscador>

  <section className='sectionCarrusel'>
      <div className='divTrending'>
        <div className='divh5TittleTrending'>
          <h5 className='h5Trending'>Trending</h5>    
        </div>

        <div className='containerPrincipal'>
          <button onClick={flechaIzquierda} className='btnIzquierda'> <Icon icon={faChevronLeft}></Icon> </button>

          <div className='containerCarrousel' ref={filaRef}>
            <div className='carrousel'>
              {peliculas.filter(pelicula => pelicula.trending === true).map(pelicula => (

                <div className='divMovie' key={pelicula.id}>
                <img className='imgPelicula' src={pelicula.img} alt='pelicula/serie'/>
             
                <div className='divInfoMovieContainer'>

                  <div className='divInfoMovie2'>
                  <p className='pDivInfoMovie2'>{pelicula.year}</p>
                  <hr className='hrMovie'/>
                  <p className='pDivInfoMovie2'><img className='svgCarrousel' src={pelicula.icono} alt=''/>{pelicula.category}</p>
                  <hr className='hrMovie'/>
                  <p className='pDivInfoMovie2'>{pelicula.age}</p>
                  </div>
                  
                  <div className='divInfoMovie3'>
                  <p className='pDivInfoMovie3'>{pelicula.name}</p>
                  </div>
                  
                </div>
              
              </div>
              ))}
              
            </div>
          </div>

          <button onClick={flechaDerecha} className='btnDerecha'> <Icon icon={faChevronRight}></Icon> </button>
        </div>
      </div>
  </section>  

  <section className='sectionRecomended'>

    <div className='divh5TittleRecomended'>
      <h5 className='h5Recomended'>Recomended for you</h5>    
    </div>

<div className='divRecomendedContainer'>
{peliculas.filter(pelicula => pelicula.trending === false).map(pelicula => (
      <div className='divRecomended' key={pelicula.id}>
        <div className='divImgRecomended'>
          <img className='imgRecomended' src={pelicula.img} alt='pelicula/movie'/>
        </div>
        
       
        <div className='divInfoMovieRecomended2'>
          <p className='pDivInfoMovieRecomended2'>{pelicula.year}</p>
          <hr className='hrMovie'/>
          <p className='pDivInfoMovieRecomended2'><img className='svg' src={pelicula.icono} alt=''/>{pelicula.category}</p>
          <hr className='hrMovie'/>
          <p className='pDivInfoMovieRecomended2'>{pelicula.age}</p>
        </div>
              
        <div className='divInfoMovieRecomended3'>
          <p className='pDivInfoMovieRecomended3'>{pelicula.name}</p>
        </div>
        
      </div>
    )
    )}
</div>
    
  </section>
 
  </main>
)

}

export default Home
