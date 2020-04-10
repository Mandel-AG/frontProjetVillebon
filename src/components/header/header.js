import React from 'react';
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
               <li> Accueil </li>
               <li> Club </li>
               <li> Categorie </li>
               <li> Evenement </li>
               <li> Gallery </li>
               <li> Contact </li>
               <li> Boutique </li>
            </ul>
         </nav>
      </div>
   )
}


export default Header ;