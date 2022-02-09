import React from 'react';
import {NavLink} from 'react-router-dom'
import './header.css';

function Header(props){
   return(
      <div className="containerHeader">
         <div className='logo'>
            <img src='/logo.png' 
            alt='logo' />
         </div>
         <div>
            <h1 className='titleHeader'>C.B.B.V.</h1>
            <h3 className='subtitleHeader'>Basket-Ball Villebon</h3>
         </div>
         <nav>
            <ul className='ulHeader'>
               <NavLink className='link' activeClassName='underline' exact to='/'> Accueil </NavLink>
               <NavLink className='link' activeClassName='underline' to='/club'> Club </NavLink>
               <NavLink className='link' activeClassName='underline' to='/categories' > Catégories </NavLink>
               <NavLink className='link' activeClassName='underline' to='/evenements' > Évenement </NavLink>
               <NavLink className='link' activeClassName='underline' to='/gallery'> Gallerie </NavLink>
               <NavLink className='link' activeClassName='underline' to='/contact'> Contact </NavLink>
               <NavLink className='link' activeClassName='underline' to='/boutique'> Boutique </NavLink>
            </ul>
         </nav>
      </div>
   )
}


export default Header ;