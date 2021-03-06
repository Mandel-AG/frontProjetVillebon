import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const Gym = (props) => {

  const [gyms, setGym] = useState([]);


  useEffect(()=> {
    setGym(props.gyms)
  },[props.gyms])


  // const data = props.gyms.map(gym => (
  //        <div className="divEachGym" key={Math.random()}>
  //           <img src={gym.picture} alt={gym.name}/>

  //           <div className="divEachGymText">
  //              <p>{gym.name}</p><br/>
  //              <p>{gym.adress}</p><br/>
  //              <p>{gym.introduction}</p><br/>
  //           </div> 
  //        </div>
  //     )) 

 
  return(
    <div className="containerGymClub">

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
                     <img src='/staff.jpg' alt="staff"/>
                  <h4>Membres</h4>
                  </div>
               </Link>
         </nav>
      <h2>Gymnases</h2>

      {gyms.map(gym => (
         <div className="divEachGym" key={Math.random()}>
            <img src={gym.picture} alt={gym.name}/>

            <div className="divEachGymText">
               <h3>{gym.name}</h3><br/>
               <p>Adresse : {gym.adress}</p><br/>
               <p>{gym.introduction}</p><br/>
            </div> 
         </div>
      ))
      }
      {/* {data} */}
    </div>
  )
}

export default Gym ;