import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//containers
import Home from './containers/Home';
import Programming from './containers/Programming';
import Skills from './containers/Skills';
import Story from './containers/Story';
import Delta from './containers/Delta';
import Musicbnb from './containers/Musicbnb';

class App extends Component {
    render(){    
    return (
          <Router>
              <Switch>
                
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Programming} />
                <Route path="/delta" component={Delta} />
                <Route path="/musicbnb" component={Musicbnb} />
                <Route path="/skills" component={Skills} />
                <Route path="/story" component={Story} />
                <Route render={
                  () => <h3>Oops, we couldn't find this page. Try reverting to Home, homie </h3>
                }/>
              </Switch>
          </Router>

      );
    }
  }


export default App;