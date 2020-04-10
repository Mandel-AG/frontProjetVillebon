import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Accueil } from './components/index';

class App extends Component{
  constructor(props){
    super(props)

    this.state ={
      posts:[],
      media: [],
      scores:[]
    }
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
                      <Route exact path="/" component={Accueil} />
                  </Switch>
                  </div>
        </div>
      </Router>


    )
  }
}

export default App;
