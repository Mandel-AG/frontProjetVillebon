import React, { useEffect, useState } from 'react';
import './categories.css';

function Categories(props){

	const [selectedTeam,setSelectedTeam ] = useState([]);
	const [selectedPicture, setSelectedPicture ] =useState('');
	const [SelectedScore, setSelectedScore] = useState([]);
	const [selectedMembers, setSelectedMembers] = useState([]);
	
	

	
	useEffect(() => {
		const selectedTeam = props.teams.filter( element => element.name === 'sm1');
		const selectedMembers = props.members.filter( element => element.team === 'sm1');
		const selectedScore = props.scores.filter(element => element.homeTeam === 'sm1');


		setSelectedTeam(selectedTeam);
		setSelectedMembers(selectedMembers);
		setSelectedScore(selectedScore);
	},[props.teams])


	

	const filterTeam = (type) =>{
		const teams = [ ...props.teams];
		const scores = [...props.scores];

		const filteredTeam = teams.filter( element => element.name === type);
		const filteredScore = scores.filter( element => element.homeTeam.trim().toLowerCase() === type.toLowerCase());

		const selectedPicture = selectedTeam.map( element => element.picture)

		const selectedMembers = props.members.filter( element => element.role.toLowerCase() === 'player' && element.team.toLowerCase() === type.toLowerCase());


			setSelectedTeam(filteredTeam);
			setSelectedScore(filteredScore);
			setSelectedPicture(selectedPicture);
			setSelectedMembers(selectedMembers);
	}



		const filteredScore = SelectedScore.map(score => (
			<li key={Math.random()} >
				{ (score.result.toLowerCase().trim() === 'victoire') ? (<img id='result'  src='/victory.png' alt='victoire' />) : (<img id='result'  src='/defeat.png' alt='victoire' />)}
				{`${ score.result } des 
				${ score.homeTeam.toUpperCase() }  contre 
				${ score.opponent.toUpperCase() }  - 
				${ score.homeTeamScore } - 
				${ score.opponentScore }`}
			</li>
		))

		const member = selectedMembers.map(element =>(
			<div key={element.id}>
				<li>NOM : {element.firstName}  {element.lastName} - POSTE: {element.position} </li>
			</div>
		))

		const teamPicture = selectedTeam.map(element => (
			<div className='imagePresentation' key={element.id}>
				<img src={element.picture} alt={element.name} />
			</div>
		))
		

      return(
         <div className='containerCategories'>

						<div className='divEquipes'>
							<h3>Choisissez une équipe</h3>
							<div className='categoriesfiltreEquipe'>
								<ul>
									<li onClick={()=>filterTeam('sm1')} >SM1</li>
									<li onClick={()=>filterTeam('u20')} >U20</li>
									<li onClick={()=>filterTeam('u17')} >U17</li>
									<li onClick={()=>filterTeam('u15')} >U15</li>
									<li onClick={()=>filterTeam('u13')} >U13</li>
									<li onClick={()=>filterTeam('u11')} >U11</li>
									<li onClick={()=>filterTeam('u9')} >U9</li>
								</ul>
							</div>
						</div>

						<div>
    


							</div>

						<div className='containerInfos'>
							<div className='containerPresentation'>
									<h2> Presentation </h2>
									<h3>{selectedTeam.map(element=> element.name.toUpperCase())}</h3>
								<div className='divPresentation'>
										{teamPicture}
								</div>
							</div>

							<div className='categoryInfos'>
									<h3>Infos</h3>
									<h4> Prix : {selectedTeam.map(element=> element.price)} euros.</h4>
									<h4> Horaires : {selectedTeam.map(element=> element.schedule)}</h4>
								</div>
							
							<div className='containerCategoriesRoster'>
									<h2> Membres </h2>
								<div className='divRoster'>
									<ul className='ulCategoriesRoster'>
										{member}
									</ul>
								</div>
							</div>

								<div className='containerCategoriesResults'>
									<h2> Resultats </h2>
										<div className='divCategoriesResults'>
											<ul className='ulCategoriesResults'>
												{filteredScore}
											</ul>
										</div>
								</div>
						</div>
					

						
			</div>

      )
}


export default Categories;