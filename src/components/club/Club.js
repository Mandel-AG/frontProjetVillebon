import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './club.css';

class Club extends Component{
   constructor(props){
      super(props)

      this.state = {
         clubs:[],
         members:[],
         gyms:[]
      }
   }


    componentDidMount(){
      const {clubs, members, gyms} = this.props;

       this.setState({
         clubs,
         members,
         gyms
      })

   }



   render(){
      // console.log(this.state.club, 'club');
      // console.log(this.state.members, 'member');
      // console.log(this.state.gyms, 'gym');
      // console.log(this.props.gyms, 'gym');

      // // const member = this.state.members.map(member => (
      // //    <div className="divEachMember" key={Math.random()}>
      // //       <img src={member.picture} alt={member.role}/>
      // //       <p>{member.firstName}</p>
      // //       <p>{member.lastName}</p>
      // //       <p>{member.role}</p>
      // //    </div>
      // // ))
   


      // const members = this.state.members.filter(element => element.role !== 'player')
      
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



      // const gym = this.state.gyms.map(gym => (
      //    <div className="divEachGym" key={Math.random()}>
      //       <img src={gym.picture} alt={gym.name}/>

      //       <div className="divEachGymText">
      //          <p>{gym.name}</p><br/>
      //          <p>{gym.adress}</p><br/>
      //          <p>{gym.introduction}</p><br/>
      //       </div> 
      //    </div>
      // ))

      // const club = this.state.clubs.map(club => (
      //    <div key={Math.random()}>
      //       <img src={club.picture} alt={club.name}/>
      //       <p>{club.name}</p><br/>
      //       <p>{club.introduction}</p>
      //    </div>
      // ))

      return(
         <>

         <h2 className="clubTitle">Club</h2>

         <nav className="navClub">

               <Link to="/club/gym">
                  <div className="menu ">
                     <img src='/gym.jpg' alt="gymnase" />
                     <h4>GYM</h4>
                  </div>
               </Link> 



               <Link to="/club/intro">
                  <div className="menu menuClub">
                     <img src='/club.png' alt='club' />
                     <h4>Présentation du Club</h4>
                  </div>   
               </Link> 



               <Link to="/club/members">
                  <div className="menu">
                     <img src='/staff.jpg' alt='staff' />
                  <h4>Membres</h4>
                  </div>
               </Link>
         </nav>

         </>
      )
   }
}


export default Club ;