import React from 'react';
import Home from './Home';
import Header from './Header'
import Patron from './Patron';
import Employee from './Employee';
import {Switch, Route} from 'react-router-dom';
import KegsList from './KegsList';
import KegsDetails from './KegsDetails';
import Pints from './Pints';
import Form from './Form';
import Sell from './Sell';
import Edit from './Edit';

function App() {

  return(
    <div>
      <Header/>
      <Switch>
          <Route  exact path='/' component={Home}/>
          <Route path='/patron' component={Patron} />
          <Route path='/employee' component={Employee} />
          <Route path='/kegslist' component={KegsList} />
          <Route path='/kegdetails' component={KegsDetails} />
          <Route path='/pints' component={Pints} />
          <Route path='/form' component={Form} />
          <Route path='/sell' component={Sell} />
          <Route path='/edit' component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
