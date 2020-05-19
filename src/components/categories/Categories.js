import React, { Component } from 'react';
import './categories.css';

class Categories extends Component{
   constructor(props){
      super(props)

      this.state = {
         team:[],
			selectedPictures: [],
			selectedMembers:[],
			SelectedResults:[]
      }
   }


	filterResults = (type) => {
		const results = this.props.results;
		const newFilter = [ ...results];
		const filtered = newFilter.filter( element => element.equipeA.toLowerCase() === type)
		this.setState({
			SelectedResults : filtered
		})
	}



   render(){

		const filteredScore = this.state.SelectedResults.map(score => (
			<li key={Math.random()} >
				{`${ score.result } des 
				${ score.equipeA.toUpperCase() }  contre 
				${ score.equipeB.toUpperCase() }  - 
				${ score.pointsA } - 
				${ score.pointsB }`}
			</li>))

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

						<div className='containerInfos'>
							<div className='containerPresentation'>
									<h3> Presentation </h3>
								<div className='divPresentation'>
									<div className='imagePresentation'>
										<img src='' alt=''></img>
									</div>
								</div>
							</div>
							
							<div className='containerCategoriesRoster'>
									<h3> Membres </h3>
								<div className='divRoster'>
									<ul className='ulCategoriesRoster'>
										
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