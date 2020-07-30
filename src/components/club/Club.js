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