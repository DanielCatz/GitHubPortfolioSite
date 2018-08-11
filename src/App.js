import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from './pages/home';
import NotFound from './pages/notfound';

class App extends Component {
  render() {
    return (
      
        <Router>
          <Switch>        
        <Route exact path='/' component= {Home} />    
        <Route  path='*' component= {NotFound} />      
          </Switch>
        </Router>
    
    );
  }
}

export default App;
