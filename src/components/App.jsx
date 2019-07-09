import React from 'react';
import Home from './Home';
import Patron from './Patron';
import Employee from './Employee';
import {Switch, Route} from 'react-router-dom';

function App() {

  return(
    <div>
  
      <Switch>
          <Route  exact path='/' component={Home}/>
          <Route path='/patron' component={Patron} />
          <Route path='/employee' component={Employee} />
      </Switch>
    </div>
  );
}

export default App;
