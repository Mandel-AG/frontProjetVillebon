import React, { Component } from 'react';
import axios from 'axios';
import { Loader, Rss } from '../index';
import './accueil.css'

class Accueil extends Component{
	constructor(props){
		super(props)

		this.state ={
				posts:[],
				loaded:false,
				results: [],
				postMatch: [],
				postResultats : [],
				selectedFiltreTeam : []
		}
	}


	filterResults = (type) => {
		const results = this.state.results;
		const newFilter = [ ...results]
		const filtered = newFilter.filter( element => element.equipeA.toLowerCase() === type)
		this.setState({
			selectedFiltreTeam : filtered
		})
	}
    
	allresults = () =>{
		const selectedFiltreTeam = [...this.state.results]
		this.setState({
			selectedFiltreTeam 
		})
	}



	componentDidMount(){
		axios.all([
			axios.get('http://localhost:3004/posts'),
			axios.get('http://localhost:3004/score')
		])

		.then(axios.spread((posts, score) => {
			const post = posts.data.map(element => ({
				title: element.title,
				description: element.description,
				typePost : element.typePost
				}))

			const scores = score.data.map(element => ({
				pointsA: element.pointsA,
				pointsB: element.pointsB,
				equipeA : element.equipeA,
				equipeB : element.equipeB,
				result : element.result
			}))
			console.log(post, scores)

			this.setState({
				posts: post,
				results:scores,
				loaded:true,
				selectedFiltreTeam : scores
			})
		 }));
	}
    


	render(){

		console.log(this.state.posts)
		const posts = 
		this.state.posts.map(post => (
			// if(post.typePost.toLowerCase() === 'prochainmatch' ){
			// 	 <li key={Math.random()} > { post.title } </li>
			// }
			<li key={Math.random()} > { post.description } </li>

		))

		const filteredScore = this.state.selectedFiltreTeam.map(score => (
			<li key={Math.random()} >
				{`${ score.result } des 
				${ score.equipeA.toUpperCase() }  contre 
				${ score.equipeB.toUpperCase() }  - 
				${ score.pointsA } - 
				${ score.pointsB }`}
			</li>
	))


		return(
			<div className='containeBlockAccueil'>
				{(this.state.loaded) ? (
					<>
						<div className='containerProchainMatchs'>
							<div>
								<h3> Prochain Matchs </h3>
							</div>
							<div className='divProchainMatch'>
									<ul className='ulAccueilProchainMatchs'>
										{posts}
									</ul>
							</div>
						</div>

						<div className='containerResultats'>
							<div>
								<h3> Resultats </h3>
							</div>
							<div className='divResultats'>
									<ul className='ulAccueilResultats'>
										{filteredScore}
									</ul>
									<div className='blockDroitResultats'>
										<p>Equipes</p>
										<div className='AccueilfiltreEquipe'>
											<ul>
												<li onClick={this.allresults} >Tout</li>
												<li onClick={()=>this.filterResults('sm1')} >SM1</li>
												<li onClick={()=>this.filterResults('u20')} >U20</li>
												<li onClick={()=>this.filterResults('u15')} >U15</li>
												<li onClick={()=>this.filterResults('u13')} >U13</li>
												<li onClick={()=>this.filterResults('u11')} >U11</li>
												<li onClick={()=>this.filterResults('u9')} >U9</li>
												<li onClick={()=>this.filterResults('u7')} >U7</li>												
											</ul>
										</div>
									</div>
							</div>
						</div>
					<Rss/>
					</>
					)
					:
					(<div className='loadingCenter'><Loader /></div>)
				}
			</div>
		)
	}
}


export default Accueil;