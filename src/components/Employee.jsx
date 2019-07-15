import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import KombuchaList from './KombuchaList';

function Employee(props){
  let optionalSelectedKombucha = null;
  if (props.selectedKombucha != null){
    optionalSelectedKombucha = <KombuchaDetails selectedKombucha={props.kombuchaList[props.selectedKombucha]}/>;
  }
  return(
    <div>
      <p>Employee Component</p>
      {optionalSelectedKombucha}
      <KombuchaList
        kombuchaList={props.kombuchaList}
        currentRouterPath={props.currentRouterPath}
        onKombuchaSelection={props.onKombuchaSelection}/>


      <Link to="/form">Add a Kombucha</Link><br></br>
      <Link to="/pints">Pints</Link><br></br>
      <Link to="/edit">Edit</Link>
    </div>
  );
}


Employee.propTypes = {
  KombuchaList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKombuchaSelection: PropTypes.func.IsRequired,
  selectedKombucha: PropTypes.string
};


export default Employee;
