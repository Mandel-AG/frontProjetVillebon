import React from 'react';
import './evenements.css';

function Evenements(props){

   const posts = props.posts;
   const filteredPosts = posts.filter(post => (
      post.typePost.toLowerCase() === 'evenement' 
   ))
   console.log(filteredPosts)
   console.log(filteredPosts)


   const evenements = filteredPosts.map(  evenement =>(
      <div className='eachEvents' key={ evenement.id }>
         <h3>{ evenement.title }</h3>
         <p>{ evenement.description }</p>
         <img src={ evenement.file} alt={ evenement.name } width='500px' />
         {/* {(evenement.file) ? <img src={ evenement.file} alt={ evenement.name } /> : (null)} */}
      </div>
   ))
   // evenements.map(pers =>{
   //    <div className='divEvenements'>
   //       <img />
   //       <p>Nom</p>
   //    </div>
   // })

   return(
         <div className="containerEvenements">
            <h1>Evenements</h1>
            <div className='divEvenements'>
               { evenements }
            </div>
         </div>

   )
}


export default Evenements ;