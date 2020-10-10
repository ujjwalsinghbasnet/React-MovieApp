import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Search from './components/Search';
import Moviepage from './components/Moviepage';
import Popular from './components/Popular';

function App() {
  return (
     <Router>
       <Switch>
         <Route path = '/'  exact render={(props) => <Popular key = 'movie' {...props} url = {`https://api.themoviedb.org/3/trending/movie`}/>}/>
         <Route path = '/tv'  exact render={(props) => <Popular key = 'tv' {...props} url = {`https://api.themoviedb.org/3/trending/tv`}/>}/>
         <Route path='/movie/:id'  render = {props => <Moviepage key = 'singleMovie' {...props} url = {`https://api.themoviedb.org/3/movie`} isMovie = {true}/>}/>
         <Route path='/tv/:id' render = {props => <Moviepage key = 'singleTV' {...props} url = {`https://api.themoviedb.org/3/tv`} isMovie = {false}/>}/>
         <Route path = '/search' component = {Search} />
       </Switch>
     </Router>
  );
}

export default App;
