import React from 'react';
import './partners.css';

function Partners(props){
  
   const medias = props.medias;
    
   const filteredMedias = medias.filter(media => (
      media.mediaType.toLowerCase() === 'partner'
   ))


   const mediasList = filteredMedias.map(media =>(
      <div key={media.id} className="imgPartner" >
       <img src={ media.picture } alt={ media.name } />
      </div>
   ))
   return(
      <div className="containerPartners  ">
            {/* <div className='divPartners'> */}
            <div className='divPartners'>
               { mediasList }
               </div>
      </div>
   )
}


export default Partners ;


