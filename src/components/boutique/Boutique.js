import React from 'react';
import './boutique.css';

function Boutique(props){

   const posts = props.posts;
   const filteredPosts = posts.filter(post => (
      post.typePost.toLowerCase() === 'product' 
   ))


   const produits = filteredPosts.map(  produit =>(
      <div className='eachEvents' key={ produit.id }>
         <h3>{ produit.title }</h3>
         <p>{ produit.description }</p>
         <img src={ produit.file} alt={ produit.name } width='500px' />
         {/* {(evenement.file) ? <img src={ evenement.file} alt={ evenement.name } /> : (null)} */}
      </div>
   ))
   return(
         <div className="containerBoutique">
            <h1>Produits</h1>
            <div className='divProduits'>
               { produits }
            </div>
         </div>

   )
}


export default Boutique ;