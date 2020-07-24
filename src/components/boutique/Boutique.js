import React from 'react';
import './boutique.css';

function Boutique(props){

   const dataProducts = props.products;


   const products = dataProducts.map(  product =>(
      <div className='eachProduct' key={ product.id }>
         
         <img src={ product.picture} alt={ product.name } width='500px' />
         <div className='productDescription'>
            <h3>{ product.name }</h3>
            <p>{ product.description }</p>
         </div>
         
         {/* {(evenement.file) ? <img src={ evenement.file} alt={ evenement.name } /> : (null)} */}
      </div>
   ))
   return(
         <div className="containerShop">
            <h1>Produits</h1>
            <div className='divProduct'>
               { products }
            </div>
         </div>

   )
}


export default Boutique ;