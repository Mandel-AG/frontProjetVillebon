import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Accueil, Club, Evenements, Gallery, Contact, Boutique, Categories } from './components/index';

class App extends Component{
  constructor(props){
    super(props)

    this.state ={
      posts:[],
      medias: [],
      results:[],
      clubs:[]
    }
  }


  componentDidMount(){
		axios.all([
			axios.get('http://localhost:3004/api/posts'),
			axios.get('http://localhost:3004/api/scores'),
			axios.get('http://localhost:3004/api/medias'),
			axios.get('http://localhost:3004/api/club')
		])

		.then(axios.spread((posts, scores, medias, clubs) => {
      
      console.log(medias)
			const post = posts.data.map(element => ({
				title: element.title,
				description: element.description,
				typePost : element.typePost
				}))

			const score = scores.data.map(element => ({
				pointsA: element.pointsA,
				pointsB: element.pointsB,
				equipeA : element.equipeA,
				equipeB : element.equipeB,
				result : element.result
      }))
      
      const media = medias.data.map(element => ({
        name : element.name,
        mediaType : element.mediaType,
        team : element.team,
        description : element.description,
        picture : element.picture
      }))


      const club = clubs.data.map(element => ({
        name : element.name,
        team : element.equipe,
        description : element.description,
        infos : element.infos,
        picture : element.picture
      }))

      { if( media && post && score && club){
          this.setState({
            posts: post,
            results:score,
            medias:  media,
            clubs : club,
            loaded:true,
            selectedFiltreTeam : scores
          })
      }
      else {console.error('une des requetes est null')}
      }
    }))
    .catch((err)=>{
      console.error('un requete n\'est pas etablie')
    })
  }
  

  render(){
    console.log(this.state.medias)
    console.log(this.state.results)
    console.log(this.state.posts)
    return (
      <Router>
        <div>
          <div className='header'>
            <Header />
          </div>
          <div>
          <Switch>
              <Route exact path="/" render={(props) => <Accueil {...props} posts={ this.state.posts } results={ this.state.results } medias={ this.state.medias }/>} />
              <Route exact path="/club" render={(props) => <Club {...props} clubs={ this.state.clubs }  medias={ this.state.medias }/>} />
              <Route exact path="/categories" render={(props) => <Categories {...props}  posts={ this.state.posts } results={ this.state.results } medias={ this.state.medias }/>} />
              <Route exact path="/evenements" render={(props) => <Evenements {...props} posts={ this.state.posts }/>} />
              <Route exact path="/gallery" render={(props) => <Gallery {...props} medias={ this.state.medias }/>} />
              <Route exact path="/contact" render={(props) => <Contact {...props} />} />
              <Route exact path="/boutique" render={(props) => <Boutique {...props} posts={ this.state.posts } />} />
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
