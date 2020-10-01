import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Moviepage from './components/Moviepage';
import Popular from './components/Popular';

function App() {
  return (
     <Router>
       <Switch>
         <Route path = '/'  exact render={(props) => <Popular {...props} url = {`https://api.themoviedb.org/3/trending/movie`}/>}/>
         <Route path = '/tv' exact render={(props) => <Popular {...props} url = {`https://api.themoviedb.org/3/trending/tv`}/>}/>
         <Route path='/movies/:id'  render = {props => <Moviepage {...props} url = {`https://api.themoviedb.org/3/movie`} isMovie = {true}/>}/>
         <Route path='/tv/:id' render = {props => <Moviepage {...props} url = {`https://api.themoviedb.org/3/tv`} isMovie = {false}/>}/>
       </Switch>
     </Router>
  );
}

export default App;
