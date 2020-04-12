import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component{
   // constructor(props){
   //    super(props)

   //    this.state= {
   //       selectedFilter: []
   //    }
   // }
   
   // filterEvents = (type) => {
	// 	const events = [...this.props.events];
	// 	const filtered = events.filter( element => element.typePost.toLowerCase() === type)
	// 	this.setState({
	// 		selectedFilter : filtered
	// 	})
   // }
   
   // filterTeam = (type) => {
	// 	const teams = this.props.teams;
	// 	const newTeam = [ ...teams];
	// 	const filtered = newTeam.filter( element => element.typePost.toLowerCase() === type)
	// 	this.setState({
	// 		selectedFilter : filtered
	// 	})
	// }

    
   render(){
      // const elements = this.state.selectedFilter.map(media =>{
      //    <img src={ media.file } alt={ media.name} />
      // })


      return(
         <div className="containerGallery">
            <ul className='ulGallery'>
               <li>Equipes</li>
               <li>Evenements</li>
            </ul>

            <div className='divGallery'>

            </div>            
         </div>

   )
   }
}


export default Gallery ;