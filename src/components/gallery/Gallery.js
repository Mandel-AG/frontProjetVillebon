import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './gallery.css';

class Gallery extends Component{
   constructor(props){
      super(props)

      this.state= {
         filteredMedias : [...this.props.medias],
         link:''
      }
   }


   componentDidMount(){
      const medias = this.props.medias;
      const newMedias = [ ...medias];
      const filtered = newMedias.filter( media => media.mediaType === 'game')
      this.setState({
         filteredMedias : filtered,
         link:'game'
      })
   }
   
   filterMedias = (type) => {
      const medias = this.props.medias;
      const newMedias = [ ...medias];
      const filtered = newMedias.filter( media => media.mediaType === type)
      this.setState({
         filteredMedias : filtered,
         link : type
      })
   }
   
      
      render(){
         const mediaList = this.state.filteredMedias.map(media => (
            <div className='eachMedia' key={media.id}>
            <img src={ media.picture } alt={ media.name } />
            <p>{ media.name }</p>
            <p>{ media.description }</p>
         </div>
      ))
      
      
      return(
         <div className="containerGallery">
            <ul className='ulGallery'>
               <li className={this.state.link === 'game' ? 'active' : ''} onClick={()=> this.filterMedias('game') }>Equipes</li>
               <li className={this.state.link === 'event' ? 'active' : ''} onClick={()=> this.filterMedias('event') }>Evenements</li>
            </ul>

            <div className='divGallery'>
               { mediaList }
            </div>            
         
         </div>

      )
   }
   
}


export default Gallery ;