import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Loader from '../../utils/loader';
// import './members.css';



const Members = (props) => {

  const [members, setMembers] = useState([]);


  useEffect(()=> {
    setMembers(props.members)
  },[props.members])


 const filteredMembers = members.filter(element => element.role === 'staff')
      

  return(
    <div className="containerMemberClub">
       {(props.members) ? (
          <>

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


         <h2> Membres</h2>

         {
            filteredMembers.map(member => (
            <div className="divEachMember" key={Math.random()}>
            <img src={member.picture} alt={member.poste}/>

            <div className="divEachMemberText">
            <p>{member.position}</p><br/>
            <p>{member.firstName} {member.lastName}</p><br/>
            </div>
            </div>
            ))          
         }  
         </> 

       ) : (<Loader />)

        
      }
    </div>
  )
}

export default Members ;