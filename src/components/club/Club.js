import React from 'react';
import './club.css';

function Club(props){

   // membre.map(pers =>{
   //    <div className='divChaqueMembre'>
   //       <img />
   //       <p>Nom</p>
   //    </div>
   // })

   // gymnase.map(pers =>{
   //    <div className='divChaqueGymnase'>
   //       <img />
   //       <p>Nom</p>
   //    </div>
   // })
   return(
      <>

         <div className="containerPresentationClub">
            <h3>Presentation</h3>
            <p></p>
         </div> 
         
         <div className="containerMembresClub">
            <h3>Membres</h3>
               
         </div>

         <div className="containerGymnasesClub">
            <h3>Gymnases</h3>
            
         </div>

      </>
   )
}


export default Club ;