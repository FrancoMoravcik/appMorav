import  './Peliculas.css'

import Buscador from '../buscador/Buscador'
import { useState, useEffect } from 'react'

const Peliculas = () => {

const [peliculas, setPeliculas] = useState([])

useEffect(() => {
fetch('/data/peliculas.json')
.then(res => res.json())
.then(datos => setPeliculas(datos.filter(data => data.category === "Movies")))
}, [])

 return (
    <main className='mainMovie'>

        <Buscador></Buscador>

       
        <div className='divh5TittleMovies'>
         <h5 className='h5Movies'>Movies</h5>    
        </div>

        <div className='divRecomendedContainer'>

            {peliculas.map( pelicula => (
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
            ))}
        </div>
    </main>
 )

}


export default Peliculas
