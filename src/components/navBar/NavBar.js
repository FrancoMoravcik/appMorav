import './NavBar.css'

import { Link } from 'react-router-dom'
import { Icon } from '../icon/Icon';
import { faUser, faFilm, faTelevision, faHouse, faClapperboard } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
 
    return(
   
        <nav className='navBar'>
        <div className='divIconLogo'>
          <span className="iconLogo"><Icon icon={faClapperboard}></Icon></span> 
        </div>

        <div className='divUl'>
          <ul>
             <li className='liSpan'>
                <Link to='/home'>
                    <Icon icon={faHouse}/>
                </Link>
                <span className='span'>Home</span>
            </li>
           
             <li className='liSpan'>
                <Link to='/movies'>
                    <Icon icon={faFilm}/>
                </Link><span className='span'>Movies</span>
             </li>

             <li className='liSpan liSeries'>
                <Link to='/series'>
                    <Icon  icon={faTelevision} />
                </Link><span className='span spanLargo'>TV Series</span>
            </li>
          </ul>

        </div>
       
        <div className='divIconPerson'>
        <span className='iconPerson'><Link to='https://github.com/FrancoMoravcik' target='_blank'><Icon icon={faUser}/></Link></span>
        </div>

    </nav>

   
    )
    


}


export default NavBar