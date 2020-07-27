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

      <Link to='/club'> Retour </Link>

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