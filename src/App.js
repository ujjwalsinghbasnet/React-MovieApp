import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Moviepage from './components/Moviepage';
import Trending from './components/Trending'

function App() {
  return (
     <Router>
       <Switch>
         <Route path = '/' exact component={Trending}/>
         <Route path='/movies/:id'  component = {Moviepage} />
       </Switch>
     </Router>
  );
}

export default App;
