import React from 'react';
import './partners.css';

function Partners(props){
   // const medias = ( props.medias !== undefined ) ? props.map(media =>(
   //    <img src={ media.file } alt={ media.name }  />
   // )) : null;
   console.log(props.medias,'medias')
   const media = async () => {
         const medias = await [...props.medias];
         return await medias.map(media =>(
         // <li> <img src={ media.file } alt={ media.name } /> </li>
         console.log(media)
         
      )
         )
         }
   console.log(media)
   return(
      <div className="containerPartners">
            <ul className='ulPartners'>
               { media }
            </ul>
      </div>
   )
}


export default Partners ;