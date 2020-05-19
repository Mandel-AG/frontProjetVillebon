import React, { Component } from 'react';
import { Loader, Rss, Partners } from '../index';
import './accueil.css'

class Accueil extends Component{
	constructor(props){
		super(props)

		this.state ={
				selectedFiltreTeam : [],
				loaded:false,
				toggle:false
		}
	}


	filterResults = (type) => {
		const results = this.props.results;
		const newFilter = [ ...results];
		const filtered = newFilter.filter( element => element.equipeA.toLowerCase() === type)
		this.setState({
			selectedFiltreTeam : filtered
		})
		console.log('iu')
	}
    
	allresults = () =>{
		const selectedFiltreTeam = [...this.props.results];
		this.setState({
			selectedFiltreTeam 
		})
	}

	toggle = (e) =>{
		// this.setState({
		// 	toggle:!this.state.toggle
		// })
		// const base = true
		// e.target.active = !e.target.active
		console.log(e.getAttribute('class'))
	}


	componentDidMount(){
		const selectedFiltreTeam = [...this.props.results];
		this.setState({
			selectedFiltreTeam,
			loaded:true
		})

		console.log(this.props.medias)
	}


	render(){
		const event = document.querySelector('.containerAccueilEvenements');
		const posts = 
		this.props.posts.map(post => (
			// if(post.typePost.toLowerCase() === 'prochainmatch' ){
			// 	 <li key={Math.random()} > { post.title } </li>
			// }
			<li key={Math.random()} > { post.title } </li>

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

						<div active={true} className='containerAccueilEvenements'>
							<div>
								<h3> Evenements </h3>
							</div>
							<div className='divAccueilEvenements'>
									<ul className='ulAccueilEvenements'>
										{posts}
									</ul>
							</div>
						</div>



						<div className={(this.state.toggle) ? ('hidden') : ('containerProchainMatchs show')}>
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
												<li onClick={()=>this.filterResults('u17')} >U17</li>
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
					<Partners medias={ this.props.medias }/>
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