import React, { Component } from 'react';
import './categories.css';

class Categories extends Component{
   constructor(props){
      super(props)

      this.state = {
         teams:[],
			selectedTeam:[],
			scores:[],
			SelectedScore:[],
			selectedPicture:'',
			members:[],
			selectedMembers:[]
      }
	}


	

	
	component(){
				// let teams = [...this.props.teams];
				// let scores = [...this.props.scores];
				// let members = [...this.props.members];
				
				const selectedTeam = this.props.teams.filter( element => element.name === 'sm1');
				const selectedMembers = this.props.members.filter( element => element.team === 'sm1');
				const SelectedScore = this.props.scores.filter(element => element.homeTeam === 'sm1');


				this.setState({
					// teams,
					// scores,
					// members,
					selectedTeam,
					selectedMembers,
					SelectedScore
				});
	}


	

	filterTeam = (type) =>{
		const teams = [ ...this.props.teams];
		const scores = [...this.props.scores];

		const filteredTeam = teams.filter( element => element.name === type);
		// const filteredScore = scores.filter( element => element.homeTeam.toLowerCase() === type)
		const filteredScore = scores.filter( element => element.homeTeam.trim().toLowerCase() === type.toLowerCase());

		const selectedPicture = this.state.selectedTeam.map( element => element.picture)

		const selectedMembers = this.props.members.filter( element => element.role.toLowerCase() === 'player' && element.team.toLowerCase() === type.toLowerCase());
		this.setState({
			selectedTeam : filteredTeam,
			SelectedScore : filteredScore,
			selectedPicture,
			selectedMembers
		})
	}




   render(){

		const filteredScore = this.state.SelectedScore.map(score => (
			<li key={Math.random()} >
				{ (score.result.toLowerCase().trim() === 'victoire') ? (<img id='result'  src='/victory.png' alt='victoire' />) : (<img id='result'  src='/defeat.png' alt='victoire' />)}
				{`${ score.result } des 
				${ score.homeTeam.toUpperCase() }  contre 
				${ score.opponent.toUpperCase() }  - 
				${ score.homeTeamScore } - 
				${ score.opponentScore }`}
			</li>
		))

		const member = this.state.selectedMembers.map(element =>(
			<div key={element.id}>
				<li>NOM : {element.firstName}  {element.lastName} - POSTE: {element.position} </li>
			</div>
		))

		const teamPicture = this.state.selectedTeam.map(element => (
			<div className='imagePresentation' key={element.id}>
				<img src={element.picture} alt={element.name} />
			</div>
		))
		

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
									<li onClick={()=>this.filterTeam('sm1')} >SM1</li>
									<li onClick={()=>this.filterTeam('u20')} >U20</li>
									<li onClick={()=>this.filterTeam('u17')} >U17</li>
									<li onClick={()=>this.filterTeam('u15')} >U15</li>
									<li onClick={()=>this.filterTeam('u13')} >U13</li>
									<li onClick={()=>this.filterTeam('u11')} >U11</li>
									<li onClick={()=>this.filterTeam('u9')} >U9</li>
								</ul>
							</div>
						</div>

						<div className='containerInfos'>
							<div className='containerPresentation'>
									<h2> Presentation </h2>
									<h3>{this.state.selectedTeam.map(element=> element.name.toUpperCase())}</h3>
								<div className='divPresentation'>
										{teamPicture}
								</div>
							</div>

							<div className='categoryInfos'>
									<h3>Infos</h3>
									<h4> Prix : {this.state.selectedTeam.map(element=> element.price)} euros.</h4>
									<h4> Horaires : {this.state.selectedTeam.map(element=> element.schedule)}</h4>
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
}


export default Categories;


