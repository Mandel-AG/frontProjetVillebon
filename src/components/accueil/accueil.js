import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Loader, Rss, Partners } from '../index';
import './accueil.css';

function Accueil (props){


	const [ loader, setLoader ] = useState(false)
	const [ selectedTeam, setSelectedTeam ] = useState([])


	useEffect(() => {
		setSelectedTeam([...props.scores])
		setLoader(true)
	}, [props.scores])

	const filterResults = (type) => {
		const results = props.scores;
		const newFilter = [ ...results];
		const filtered = newFilter.filter( element => element.homeTeam.toLowerCase().trim() === type)
		setSelectedTeam(filtered)
	}
    
	const allresults = () =>{
		setSelectedTeam([...props.scores])
	};

					
		const events = props.events.map(event => (
			<li className='accueilEvenements__eachEvent' > <Link to='/evenements'>
				<p>{ event.title }  -  {event.content}</p>
				</Link>
			</li>
		))
			
		const filteredScore = selectedTeam.map(score => (
			<li key={Math.random()}  className='d-flex justify-content-around' >
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
				{(loader) ? (
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
// 							<div>
// 								<h3> Prochain Matchs </h3>
// 							</div>
// 							<div className='divProchainMatch'>
// 									<ul className='ulAccueilProchainMatchs'>
// 										{events}
// 									</ul>
// 							</div>
// 						</div> */}

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
												<li onClick={allresults} >Tout</li>
												<li onClick={()=>filterResults('sm1')} >SM1</li>
												<li onClick={()=>filterResults('u20')} >U20</li>
												<li onClick={()=>filterResults('u17')} >U17</li>
												<li onClick={()=>filterResults('u15')} >U15</li>
												<li onClick={()=>filterResults('u13')} >U13</li>
												<li onClick={()=>filterResults('u11')} >U11</li>
												<li onClick={()=>filterResults('u9')} >U9</li>
												<li onClick={()=>filterResults('u7')} >U7</li>												
											</ul>
										</div>
									</div>
							</div>
						</div>
					<Rss/>
					<h3 className="partenaires">Partenaires</h3>
					<Partners medias={ props.medias }/>
					</>
					)
					:
					(<div className='loadingCenter'><Loader /></div>)
				}
			</div>
		)
	
}


export default Accueil;
