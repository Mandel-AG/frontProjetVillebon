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

      <Link to='/club'> Retour </Link>

      <h2>Gymnases</h2>

      {gyms.map(gym => (
         <div className="divEachGym" key={Math.random()}>
            <img src={gym.picture} alt={gym.name}/>

            <div className="divEachGymText">
               <p>{gym.name}</p><br/>
               <p>{gym.adress}</p><br/>
               <p>{gym.introduction}</p><br/>
            </div> 
         </div>
      ))
      }
      {/* {data} */}
      <p>oui</p>
    </div>
  )
}

export default Gym ;