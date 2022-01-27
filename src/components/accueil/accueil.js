import React, { Component } from 'react';
import { Loader, Rss, Partners } from '../index';
import './accueil.css';
// import victory from '../../../public/victory.png'
// import victory from require('../../../public');

class Accueil extends Component{
	constructor(props){
		super(props)

		this.state ={
				selectedTeam : [],
				loaded:false,
				toggle:false
		}
	}


	filterResults = (type) => {
		const results = this.props.scores;
		const newFilter = [ ...results];
		const filtered = newFilter.filter( element => element.homeTeam.toLowerCase().trim() === type)
		this.setState({
			selectedTeam : filtered
		})
	}
    
	allresults = () =>{
		const selectedTeam = [...this.props.scores];
		this.setState({
			selectedTeam 
		})
	}



	componentDidMount(){
		let selectedTeam = [...this.props.scores];
		this.setState({
			selectedTeam,
			loaded:true
		})
	}


	render(){



		const events = this.props.events.map(event => (
			
			<li className='accueilEvenements__eachEvent' key={Math.random()} > <p>{ event.title }  -  {event.content}</p> </li>
			// <li className='marquee-rtl marquee-multi-lignes' key={Math.random()} > <p>{ event.title }  -  {event.content}</p> </li>

		))

		const filteredScore = this.state.selectedTeam.map(score => (
			<li key={Math.random()}  className='d-flex justify-content-around' >
				{/* <img id='result' style={{width : '25px'}}  src='/victory.png' alt='victoire' /> */}
				{ (score.result.toLowerCase().trim() === 'victoire') ? (<img id='result'  src='/victory.png' alt='victoire' />) : (<img id='result'  src='/defeat.png' alt='victoire' />)}
				{`${ score.result } des 
				${ score.homeTeam }  contre 
				${ score.opponent }  - 
				${ score.homeTeamScore } - 
				${ score.opponentScore }`}
			</li>
		))
		

		return(
			<div className='containeBlockAccueil'>
				{(this.state.loaded) ? (
					<>

						<div className='containerAccueilEvenements'>
							<div>
								<h3> Evenements </h3>
							</div>
							<div className='divAccueilEvenements'>
									<ul className='ulAccueilEvenements'>
										{events}
									</ul>
							</div>
						</div>



						{/* <div className={(this.state.toggle) ? ('hidden') : ('containerProchainMatchs show')}>
							<div>
								<h3> Prochain Matchs </h3>
							</div>
							<div className='divProchainMatch'>
									<ul className='ulAccueilProchainMatchs'>
										{events}
									</ul>
							</div>
						</div> */}

						<div className='containerResultats'>
							<div>
								<h3> Resultats </h3>
							</div>
							<div className='divResultats'>
									<ul className='ulAccueilResultats'>
										{filteredScore}
									</ul>
									<div className='blockDroitResultats'>
										<p>Choissisez une équipe</p>
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
					<h3 className="partenaires">Partenaires</h3>
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