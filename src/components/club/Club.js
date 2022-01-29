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

                  <div className="menu">
                     <Link to="/club/gym">
                        <figure>
                           <img src='/gym.jpg' alt="gymnase" />
                           {/* <figcaption>Gymnase</figcaption> */}
                        </figure>
                     <h4>GYM</h4>
                     </Link> 
                  </div>



                  <div className="menu menuClub">
                     <Link to="/club/intro">
                        <figure>
                           <img src='/club.png' alt='club' />
                           {/* <figcaption>Présentation du club</figcaption> */}
                        </figure>
                        <h4>Présentation du club</h4>

                     </Link> 
                  </div>   



                  <div className="menu">
                     <Link to="/club/members">
                        <figure>
                           <img src='/staff.jpg' alt='staff' />
                           {/* <figcaption>Membres</figcaption> */}
                        </figure>
                        <h4>Membres</h4>
                     </Link>
                  </div>
         </nav>

         </>
      )
   }
}


export default Club ;