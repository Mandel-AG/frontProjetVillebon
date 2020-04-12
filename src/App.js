import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Accueil, Club, Evenements, Gallery, Contact } from './components/index';

class App extends Component{
  constructor(props){
    super(props)

    this.state ={
      posts:[],
      medias: [],
      results:[]
    }
  }


  componentDidMount(){
		axios.all([
			axios.get('http://localhost:3004/posts'),
			axios.get('http://localhost:3004/score'),
			axios.get('http://localhost:3004/medias')
		])

		.then(axios.spread((posts, scores, medias) => {
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
        team : element.equipe,
        description : element.description,
        file : element.file,
        typeMedia : element.typeMedia
      }))
			// console.log(media, 'medias')
      { if( media && post && score){
          this.setState({
            posts: post,
            results:score,
            medias:  media,
            loaded:true,
            selectedFiltreTeam : scores
          })
      }
      else {console.log('oui')}
    }
		 }));
	}

  render(){

  // console.log(this.state.medias, 'media state')

    return (
      <Router>
        <div>
          <div className='header'>
            <Header />
          </div>
          <div>
          <Switch>
              <Route exact path="/accueil" render={(props) => <Accueil {...props} posts={ this.state.posts } results={ this.state.results } medias={ this.state.medias }/>} />
              <Route exact path="/club" render={(props) => <Club {...props}  medias={ this.state.medias }/>} />
              <Route exact path="/evenements" render={(props) => <Evenements {...props} medias={ this.state.medias }/>} />
              <Route exact path="/gallery" render={(props) => <Gallery {...props} posts={ this.state.posts }/>} />
              <Route exact path="/contact" render={(props) => <Contact {...props} />} />
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
