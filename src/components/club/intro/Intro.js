import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './intro.css'



const Gym = (props) => {

  const [clubs, setGym] = useState([]);


  useEffect(()=> {
    setGym(props.clubs)
  },[props.clubs])


 
  return(
    <div className="containerPresentationClub">

        <nav className="navClub">

               <Link to="/club/gym">
                  <div className="menu menuMin">
                     <img src='/gym.jpg' alt="gymnase" />
                     <h4>GYM</h4>
                  </div>
               </Link> 



               <Link to="/club/intro">
                  <div className="menu menuMinClub menuMin">
                     <img src='/club.png' alt="club" />
                     <h4>Présentation du Club</h4>
                  </div>   
               </Link> 



               <Link to="/club/members">
                  <div className="menu menuMin">
                     <img src='/staff.jpg' alt="staff" />
                  <h4>Membres</h4>
                  </div>
               </Link>
         </nav>
      <h2> Présentation</h2>

      {
        clubs.map(club => (
         <div className="divIntro" key={club.id}>
            <img src={club.picture} alt={club.name}/>

            <div className="divIntroText">
              <p>{club.introduction}</p>
            </div>
         </div>
      ))
      }
    </div>
  )
}

export default Gym ;