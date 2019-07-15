import React from 'react';
import Home from './Home';
import Header from './Header'
import Patron from './Patron';
import Employee from './Employee';
import {Switch, Route} from 'react-router-dom';
import KombuchaList from './KombuchaList';
import KombuchaDetails from './KombuchaDetails';
import Bottles from './Bottles';
import Form from './Form';
import Sell from './Sell';
import Edit from './Edit';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKombuchasList: {},
      selectedKombucha: null
    };

    this.handleAddingNewKombuchaToList =  this.handleAddingNewKombuchaToList.bind(this);
    this.handleChangingSelectedKombucha = this.handleChangingSelectedKombucha.bind(this);
  }

  handleAddingNewKombuchaToList(newKombucha) {
    var newKombuchaId = v4()
    var newMasterKombuchasList = Object.assign({}, this.state.masterKombuchasList, {
      [newKombuchaId]: newKombucha
    });
    this.setState({masterKombuchasList: newMasterKombuchasList});
  }

  handleChangingSelectedKombucha(kombuchaId) {
    this.setState({selectedKombucha: kombuchaId});
  }


  render(){
  return(
    <div>
      <Header/>
      <Switch>
          <Route  exact path='/' component={Home}/>
          <Route path='/patron' component={Patron} />
          <Route path='/employee' render={(props)=><Employee kombuchaList={this.state.masterKombuchasList} currentRouterPath={props.location.pathname}
            onKombuchaSelection={this.handleChangingSelectedKombucha}
            selectedKombucha={this.state.selectedKombucha}/>} />
          <Route path='/kombuchalist' render={()=><KombuchaList kombuchaList={this.state.masterKombuchasList} />} />
          <Route path='/kombuchadetails' component={KombuchaDetails} />
          <Route path='/bottles' component={Bottles} />
          <Route path='/form' render={()=><Form onAddNewKombucha={this.handleAddingNewKombuchaToList} />} />
          <Route path='/sell' component={Sell} />
          <Route path='/edit' component={Edit} />
      </Switch>
    </div>
    );
  }
}

export default App;
