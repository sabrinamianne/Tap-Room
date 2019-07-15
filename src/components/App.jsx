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
      masterKombuchasList: [
        {
          brandKombucha: 'Kombucha Seattle',
          amountBottle: 2000,
          price: 4,
          flavorKombucha: 'Strawberry'
        },
        {
          brandKombucha: 'KombuTya',
          amountBottle: 5100,
          price: 7,
          flavorKombucha: 'WaterMelon'
        },
        {
          brandKombucha: 'Kombucha Seattle',
          amountBottle: 6300,
          price: 4,
          flavorKombucha: 'Cherry'
        },
        {
          brandKombucha: 'Kagy',
          amountBottle: 1000,
          price: 5,
          flavorKombucha: 'Lemon'
        },
        {
          brandKombucha: 'Kagy',
          amountBottle: 1000,
          price: 5,
          flavorKombucha: 'Blueberry'
        },
        {
          brandKombucha: 'Lany Kombucha',
          amountBottle: 2000,
          price: 11,
          flavorKombucha: 'Chocolate'
        },
        {
          brandKombucha: 'Poulya Koff',
          amountBottle: 3000,
          price: 8,
          flavorKombucha: 'Cherry Lemon'
        },
        {
          brandKombucha: 'Koly',
          amountBottle: 500,
          price: 6,
          flavorKombucha: 'Ginger'
        },
        {
          brandKombucha: 'Kagy',
          amountBottle: 300,
          price: 5,
          flavorKombucha: 'Cola'
        },
        {
          brandKombucha: 'Kagy',
          amountBottle: 300,
          price: 6,
          flavorKombucha: 'Kiwi'
        }
      ],
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
