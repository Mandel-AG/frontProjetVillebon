

import React, { useState, useEffect } from 'react';
import './categories.css';

const Categories  = (props) => {

  const [team, setTeam] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [scores, setScores] = useState([]);
  const [selectedScore, setSelectedScore] = useState([]);
  const [picture, setPicture] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);


  useEffect(()=> {
    setTeam(props.teams)
    setScores(props.scores)
    setMembers(props.members)
  },[props.members, props.scores, props.teams])


	

	const filterTeam = (type) =>{

		setSelectedTeam(team.filter( element => element.name === type));
		// const filteredScore = scores.filter( element => element.homeTeam.toLowerCase() === type)
		setSelectedScore(scores.filter( element => element.homeTeam.trim().toLowerCase() === type.toLowerCase()));
		setSelectedMembers(members.filter( element => element.role.toLowerCase() === 'player' && element.team.toLowerCase() === type.toLowerCase()));

		setPicture(selectedTeam.map( element => element.picture));
	}






		const filteredScore = selectedScore.map(score => (
			<li key={Math.random()} >
				{ (score.result.toLowerCase().trim() === 'victoire') ? (<img id='result'  src='/victory.png' alt='victoire' />) : (<img id='result'  src='/defeat.png' alt='victoire' />)}
				{`${ score.result } des 
				${ score.homeTeam.toUpperCase() }  contre 
				${ score.opponent.toUpperCase() }  - 
				${ score.homeTeamScore } - 
				${ score.opponentScore }`}
			</li>
		))

		const member = members.map(element =>(
			<div key={element.id}>
				<li>NOM : {element.firstName}  {element.lastName} - POSTE: {element.position} </li>
			</div>
		))

		// const teamPicture = picture.map(element => (
		// 	<div className='imagePresentation' key={element.id}>
		// 		<img src={element.picture} alt={element.name} />
		// 	</div>
		// ))
		

      return(
         <div className='containerCategories'>

			{/* <div className='divResultats'>
						<ul className='ulAccueilResultats'>
							{filteredScore}
						</ul>
			</div> */}
						<div className='divEquipes'>
							<h3>Equipes</h3>
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

						<div className='containerInfos'>
							<div className='containerPresentation'>
									<h2> Presentation </h2>
									<h3>{team.map(element=> element.name.toUpperCase())}</h3>
								<div className='divPresentation'>
									<img src={picture} alt='photo equipe' />
									
								</div>
							</div>

							<div className='categoryInfos'>
									<h3>Infos</h3>
									<h4> Prix : {team.map(element=> element.price)} euros.</h4>
									<h4> Horaires : {team.map(element=> element.schedule)}</h4>
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

         // </div>
      )
   
}


export default Categories;