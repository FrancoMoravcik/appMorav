
import './Buscador.css'

import { useState, useEffect } from 'react';
import { Icon } from '../icon/Icon';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Buscador = () => {

    // Estado para guardar el texto que se escriba en el input
    const [searchValue, setSearchValue] = useState('');
     // Estado para guardar la pelicula que se busco
    const [peliculaBuscada, setPeliculaBuscada] = useState([])
    // Estado Fetch de peliculas Json
    const [peliculasJson, setPeliculasJson] = useState ([])
        // Estado para busqueda realizada
    const [busquedaRealizada, setBusquedaRealizada] = useState (false)

    // Funcion para guardar en el estado el texto que se escriba en el input
    const handleInputChange = (event) => {
      setSearchValue(event.target.value);
    };
 
    // Funcion para que al presionar Enter se haga algo con el searchValue (lo que se escribio en el input)
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            buscar()
        }
    }


    useEffect(() => {
      fetch('/data/peliculas.json')
    .then(res => res.json())
    .then(data => setPeliculasJson(data))
    }, []) 
    
     const buscar = () => {
        const searchMinuscula = searchValue.toLowerCase()
        const searchMinusculaUnida = searchMinuscula.replace(/\s+/g, '');

      const peliculaFiltrada = peliculasJson.filter((pelicula) => 
         pelicula.name.toLowerCase().replace(/\s+/g, '') === searchMinusculaUnida
      )

      setPeliculaBuscada(peliculaFiltrada)
      setBusquedaRealizada(true)
    }

          
    return (
    <main className='mainBuscador'>
        <div className='divBuscador'>
          <label onClick={buscar} form='buscador' className='labelBuscador'>
            <Icon icon={faMagnifyingGlass}></Icon>
          </label>

          <input  type='text' onKeyPress={handleKeyPress} className='inputBuscador' name='buscador' value={searchValue} onChange={handleInputChange} placeholder='Search for movies or TV series'/>
       </div>
        
        { busquedaRealizada && peliculaBuscada.length === 0 ? (
                <p className='pMovieBuscada'>No se encontraron resultados para "{searchValue}"</p>
            ) : (
                peliculaBuscada.map( pelicula => (
                    <div className='divMovieBuscador' key={pelicula.id}>
                    <div className='divImgBuscador'>
                      <img className='imgBuscador' src={pelicula.img} alt='pelicula/movie'/>
                    </div>
                    
                   
                    <div className='divInfoMovieBuscador2'>
                      <p className='pDivInfoMovieBuscador2'>{pelicula.year}</p>
                      <hr className='hrMovie'/>
                      <p className='pDivInfoMovieBuscador2'><img className='svg' src={pelicula.icono} alt=''/>{pelicula.category}</p>
                      <hr className='hrMovie'/>
                      <p className='pDivInfoMovieBuscador2'>{pelicula.age}</p>
                    </div>
                          
                    <div className='divInfoMovieBuscador3'>
                      <p className='pDivInfoMovieBuscador3'>{pelicula.name}</p>
                    </div>
                    
                  </div>
                ))
            )}
</main>
    )
}


export default Buscador