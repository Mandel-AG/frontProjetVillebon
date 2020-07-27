import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import './members.css';



const Members = (props) => {

  const [members, setMembers] = useState([]);


  useEffect(()=> {
    setMembers(props.members)
  },[props.members])


 const filteredMembers = members.filter(element => element.role === 'staff')
      
      // const member = members.map(member => (
      //    <div className="divEachMember" key={Math.random()}>
      //       <img src={member.picture} alt={member.role}/>

      //       <div className="divEachMemberText">
      //          <p>{member.role}</p><br/>
      //          <p>{member.firstName}</p><br/>
      //          <p>{member.lastName}</p><br/>
      //       </div>
      //    </div>
      // ))

  return(
    <div className="containerMemberClub">

        <nav className="navClub">

               <Link to="/club/gym">
                  <div className="menu menuMin">
                     <img src='/gym.jpg' />
                     <h4>GYM</h4>
                  </div>
               </Link> 



               <Link to="/club/intro">
                  <div className="menu menuMinClub menuMin">
                     <img src='/club.png' />
                     <h4>Présentation du Club</h4>
                  </div>   
               </Link> 



               <Link to="/club/members">
                  <div className="menu menuMin">
                     <img src='/staff.jpg' />
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
                <p>{member.poste}</p><br/>
                <p>{member.firstName}</p><br/>
                <p>{member.lastName}</p><br/>
             </div>
          </div>
       ))
      }
    </div>
  )
}

export default Members ;