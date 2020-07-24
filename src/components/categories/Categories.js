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

	
	componentDidMount(){
				let teams = [...this.props.teams];
				let scores = [...this.props.scores];
				let members = [...this.props.members]
				this.setState({
					teams,
					scores,
					members
				});
	}

	filterTeam = (type) =>{
		const teams = [ ...this.state.teams];
		const scores = [...this.state.scores];

		const filteredTeam = teams.filter( element => element.name === type);
		// const filteredScore = scores.filter( element => element.homeTeam.toLowerCase() === type)
		const filteredScore = scores.filter( element => element.homeTeam.trim() === type);

		const selectedPicture = this.state.selectedTeam.map( element => element.picture)

		const selectedMembers = this.state.members.filter( element => element.role === 'player' && element.team === type);
		this.setState({
			selectedTeam : filteredTeam,
			SelectedScore : filteredScore,
			selectedPicture,
			selectedMembers
		})
	}


	// filterResults = (type) => {
	// 	const results = this.props.results;
	// 	const newFilter = [ ...results];
	// 	const filtered = newFilter.filter( element => element.homeTeam.toLowerCase() === type)
	// 	this.setState({
	// 		SelectedResults : filtered
	// 	})
	// }



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


		const {selectedTeam} = this.state;

		const member = this.state.selectedMembers.map(element =>(
			<div key={element.id}>
				<p>{element.firstName} || {element.lastName}</p>
			</div>
		))

		const teamPicture = this.state.selectedTeam.map(element => (
			<div key={element.id}>
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
									<li onClick={()=>this.filterTeam('u7')} >U7</li>												
								</ul>
							</div>
						</div>

						<div className='containerInfos'>
							<div className='containerPresentation'>
									<h3> Presentation </h3>
								<div className='divPresentation'>
									<div className='imagePresentation'>

										{teamPicture}

									</div>
								</div>
							</div>
							
							<div className='containerCategoriesRoster'>
									<h3> Membres </h3>
								<div className='divRoster'>
									<ul className='ulCategoriesRoster'>
										{/* <p>{selectedTeam.memberList}</p> */}
										{member}
									</ul>
								</div>
							</div>

								<div className='containerCategoriesResults'>
									<h3> Resultats </h3>
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