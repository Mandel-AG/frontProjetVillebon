import React from 'react';
import {Link} from 'react-router-dom'
import './header.css';

function Header(props){
   return(
      <div className="containerHeader">
         <div>
            <h1 className='titleHeader'>C.B.B.V.</h1>
            <h3 className='subtitleHeader'>Basket-Ball Villebon</h3>
         </div>
         <nav>
            <ul className='ulHeader'>
               <Link to='/accueil'> Accueil </Link>
               <Link to='/club'> Club </Link>
               <Link> Categorie </Link>
               <Link to='/evenements' > Evenement </Link>
               <Link to='/gallery'> Gallery </Link>
               <Link to='/contact'> Contact </Link>
               <Link to='/boutique'> Boutique </Link>
            </ul>
         </nav>
      </div>
   )
}


export default Header ;