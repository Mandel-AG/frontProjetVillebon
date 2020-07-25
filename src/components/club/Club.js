import React, { Component } from 'react';
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
      console.log(this.state.club, 'club');
      console.log(this.state.members, 'member');
      console.log(this.state.gyms, 'gym');
      console.log(this.props.gyms, 'gym');

      const urlChange = (url) => {
         url.replace('localhost','127.0.0.1')
      }

      const member = this.state.members.map(member => (
         <div key={member.id}>
            <p>{member.firstName}</p>
            <p>{member.lastName}</p>
            <p>{member.role}</p>
            <img src={urlChange(member.picture)} alt={member.role}/>
         </div>
      ))
   
      const gym = this.state.gyms.map(gym => (
         <div key={gym.id}>
            <p>{gym.name}</p>
            <p>{gym.adress}</p>
            <p>{gym.introduction}</p>
            <img src={urlChange(gym.picture)} alt={gym.name}/>
         </div>
      ))

      const club = this.state.clubs.map(club => (
         <div key={club.id}>
            <p>{club.name}</p>
            <p>{club.introduction}</p>
            <img src={urlChange(club.picture)} alt={club.name}/>
         </div>
      ))



      return(
         <>

            <div className="containerPresentationClub">
               <h3>Presentation</h3>
               {club}
            </div> 
            
            <div className="containerMembresClub">
               <h3>Membres</h3>
                  {member}
            </div>

            <div className="containerGymnasesClub">
               <h3>Gymnases</h3>
               {gym}
            </div>

         </>
      )
   }
}


export default Club ;