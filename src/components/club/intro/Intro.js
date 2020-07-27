import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const Gym = (props) => {

  const [clubs, setGym] = useState([]);


  useEffect(()=> {
    setGym(props.clubs)
  },[props.clubs])


 
  return(
    <div className="containerPresentationClub">

      <Link to='/club'> Retour </Link>

      <h2> Présentation</h2>

      {
        clubs.map(club => (
         <div key={club.id}>
            <img src={club.picture} alt={club.name}/>
            <p>{club.name}</p><br/>
            <p>{club.introduction}</p>
         </div>
      ))
      }
      <p>oui</p>
    </div>
  )
}

export default Gym ;