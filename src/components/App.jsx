import React from 'react';
import Home from './Home';
import Header from './Header'
import Patron from './Patron';
import Employee from './Employee';
import {Switch, Route} from 'react-router-dom';
import KombuchaList from './KombuchaList';
import Form from './Form';
import { v4 } from 'uuid';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKombuchasList: [
        {
          brandKombucha: 'Kombucha Seattle',
          amountKeg: 20,
          price: 4,
          flavorKombucha: 'Strawberry'
        },
        {
          brandKombucha: 'KombuTya',
          amountKeg: 50,
          price: 7,
          flavorKombucha: 'WaterMelon'
        },
        {
          brandKombucha: 'Kombucha Seattle',
          amountKeg: 60,
          price: 4,
          flavorKombucha: 'Cherry'
        },
        {
          brandKombucha: 'Kagy',
          amountKeg: 10,
          price: 5,
          flavorKombucha: 'Lemon'
        },
        {
          brandKombucha: 'Kagy',
          amountKeg: 10,
          price: 5,
          flavorKombucha: 'Blueberry'
        },
        {
          brandKombucha: 'Lany Kombucha',
          amountKeg: 20,
          price: 11,
          flavorKombucha: 'Chocolate'
        },
        {
          brandKombucha: 'Poulya Koff',
          amountKeg: 30,
          price: 8,
          flavorKombucha: 'Cherry Lemon'
        },
        {
          brandKombucha: 'Koly',
          amountKeg: 50,
          price: 6,
          flavorKombucha: 'Ginger'
        },
        {
          brandKombucha: 'Kagy',
          amountKeg: 30,
          price: 5,
          flavorKombucha: 'Cola'
        },
        {
          brandKombucha: 'Kagy',
          amountKeg: 30,
          price: 6,
          flavorKombucha: 'Kiwi'
        }
      ],
      selectedKombucha: null,
    };

    this.handleAddingNewKombuchaToList =  this.handleAddingNewKombuchaToList.bind(this);
    this.handleChangingSelectedKombucha = this.handleChangingSelectedKombucha.bind(this);
    this.sellBottle = this.sellBottle.bind(this);
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

  sellBottle(kombuchaId) {
    const newMasterKombuchasList = [...this.state.masterKombuchasList];
    newMasterKombuchasList[kombuchaId].amountKeg --;
    this.setState({masterKombuchasList: newMasterKombuchasList});
  }


  render(){
  return(
    <div>
      <Header/>
      <Switch>
          <Route  exact path='/' component={Home}/>
            <Route path='/patron' render={(props)=><Patron kombuchaList={this.state.masterKombuchasList} currentRouterPath={props.location.pathname}
            onKombuchaSelection={this.handleChangingSelectedKombucha}
            sellBottle = {this.sellBottle}
            selectedKombucha={this.state.selectedKombucha}/>} />
            <Route path='/employee' render={(props)=><Employee kombuchaList={this.state.masterKombuchasList} currentRouterPath={props.location.pathname}
            onKombuchaSelection={this.handleChangingSelectedKombucha}
            sellBottle = {this.sellBottle}
            selectedKombucha={this.state.selectedKombucha}/>} />
          <Route path='/kombuchalist' render={()=><KombuchaList kombuchaList={this.state.masterKombuchasList} />} />
          <Route path='/form' render={()=><Form onAddNewKombucha={this.handleAddingNewKombuchaToList} />} />
      </Switch>
    </div>
    );
  }
}

export default App;
