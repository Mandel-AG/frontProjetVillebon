import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Accueil, Club, Evenements, Gallery, Contact, Boutique, Categories, Gym, Intro, Members} from './components/index';
// import { medias as mediasss } from './components/utils/request';


class App extends Component{
  constructor(props){
    super(props)

    this.state ={
      events:[],
      medias: [],
      scores:[],
      clubs:[],
      products:[],
      gyms:[],
      members:[],
      teams:[]
    }
  }


  componentDidMount(){
		axios.all([
			axios.get('https://cbbv-back.herokuapp.com/api/events'),
			axios.get('https://cbbv-back.herokuapp.com/api/scores'),
			axios.get('https://cbbv-back.herokuapp.com/api/medias'),
			axios.get('https://cbbv-back.herokuapp.com/api/clubs'),
			axios.get('https://cbbv-back.herokuapp.com/api/products'),
			axios.get('https://cbbv-back.herokuapp.com/api/gyms'),
			axios.get('https://cbbv-back.herokuapp.com/api/members'),
			axios.get('https://cbbv-back.herokuapp.com/api/teams')
		])

		.then(axios.spread((events, scores, medias, clubs, products, gyms, members, teams) => {
      
			const event = events.data.map(element => ({
        id : element._id,
				title: element.title,
				content: element.content,
				picture : element.picture,
				date : element.date
      }))

			const score = scores.data.map(element => ({
				homeTeamScore: element.homeTeamScore,
				opponentScore: element.opponentScore,
				homeTeam : element.homeTeam,
				opponent : element.opponent,
				result : element.result
      }))
      
      const media = medias.data.map(element => ({
        id: element._id,
        name : element.name,
        mediaType : element.mediaType,
        team : element.team,
        description : element.description,
        picture : element.picture,
      }))


      const club = clubs.data.map(element => ({
        id: element._id,
        name : element.name,
        introduction : element.introduction,
        picture : element.picture
      }))

      const product = products.data.map(element => ({
        id: element._id,
        name : element.name,
        description : element.description,
        picture : element.picture
      }))

      const gym = gyms.data.map(element => ({
        id: element._id,
        name : element.name,
        adress : element.adress,
        introduction : element.introduction,
        picture : element.picture
      }))

      const member = members.data.map(element => ({
        id: element._id,
        firstName : element.firstName,
        lastName : element.lastName,
        role : element.role,
        team : element.team,
        position : element.position,
        picture : element.picture
      }))

      const team = teams.data.map(element => ({
        id: element._id,
        name : element.name,
        memberList : element.memberList,
        schedule : element.schedule,
        price : element.price,
        picture : element.picture,
        games : element.games,
      }))

      this.setState({
        events: event,
        scores: score,
        medias:  media,
        clubs : club,
        products : product,
        gyms : gym,
        members : member,
        teams : team,
        loaded:true,
        selectedFiltreTeam : scores
      })
      
      // { if( media && event && score && club && product && gym && member && team){
         
      // }
      // else {console.error('une des requetes est null')}
      // }
    }))
    .catch((err)=>{
      console.error('un requete n\'est pas etablie')
    })
  }
  

  render(){
   
    return (
      <Router>
        <div>
          <div className='header'>
            <Header />
          </div>
          <div>
          <Switch>
              <Route exact path="/" render={(props) => <Accueil {...props} events={ this.state.events } scores={ this.state.scores } medias={ this.state.medias }/>} />
              <Route exact path="/club" render={(props) => <Club />} />
              <Route exact path="/categories" render={(props) => <Categories {...props}  teams={ this.state.teams } scores={ this.state.scores } members={this.state.members}/>} />
              <Route exact path="/evenements" render={(props) => <Evenements {...props} events={ this.state.events }/>} />
              <Route exact path="/gallery" render={(props) => <Gallery {...props} medias={ this.state.medias }/>} />
              <Route exact path="/contact" render={(props) => <Contact {...props} />} />
              <Route exact path="/boutique" render={(props) => <Boutique {...props} products={ this.state.products } />} />
              <Route exact path="/club/gym" render={(props) => <Gym {...props} gyms={ this.state.gyms } />} />
              <Route exact path="/club/intro" render={(props) => <Intro {...props} clubs={ this.state.clubs } />} />
              <Route exact path="/club/members" render={(props) => <Members {...props} members={ this.state.members } />} />
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
