import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import KombuchaList from './KombuchaList';
import KombuchaDetails from './KombuchaDetails';

function Employee(props){
  let optionalSelectedKombucha = null;
  if (props.selectedKombucha != null){
    optionalSelectedKombucha = <KombuchaDetails selectedKombucha={props.kombuchaList[props.selectedKombucha]}/>;
  }

  return(
    <div>
      <style jsx> {`
        .employee{
          position:sticky;
          background-color:white;
          top: 200;
          bottom:10em;

        }
        .listEmployee{
          bottom: 300em;
          top:40em;
        }

      `}
      </style>
      <div className="employee">
        <p>Employee: <strong>Jessica</strong></p>
          <Link to="/form">Add a Kombucha</Link><br></br>
          <Link to="/">Sign out</Link>
      </div>
      <div className="listEmployee">
        {optionalSelectedKombucha}
        <KombuchaList
          kombuchaList={props.kombuchaList}
          currentRouterPath={props.currentRouterPath}
          sellBottle={props.sellBottle}
          onKombuchaSelection={props.onKombuchaSelection}/>
      </div>
    </div>
  );
}


Employee.propTypes = {
  kombuchaList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKombuchaSelection: PropTypes.func.IsRequired,
  sellBottle: PropTypes.func,
  kombuchaId: PropTypes.number,
  kombuchasList: PropTypes.array,
  onAddExistingKombucha: PropTypes.func,
  selectedKombucha: PropTypes.object
};


export default Employee;
