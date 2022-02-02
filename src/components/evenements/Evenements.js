import React from 'react';
import './evenements.css';

function Evenements(props){

   const dataEvents = [...props.events]

   const events = dataEvents.map(  event =>(
      <div className='eachEvents' key={ event.id }>  
         <img src={ event.picture} alt={ event.name } width='500px' />

         <div className='eachEventText'>
            <h3>{ event.title }</h3>
            <p>{ event.content }</p>
            <p> Le {event.date.replace("T", " à ").replace(":","h").split(":00.000Z")}</p>
         </div>

      </div>
   ))

   return(
         <div className="containerEvenements">
            <h1>Evenements à venir</h1>
            <div className='divEvenements'>
               { events }
            </div>
         </div>

   )
}


export default Evenements ;