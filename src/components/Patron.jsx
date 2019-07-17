import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import KombuchaList from './KombuchaList';
import KombuchaDetails from './KombuchaDetails';

function Patron(props){
  let optionalSelectedKombucha = null;
  if (props.selectedKombucha != null){
    optionalSelectedKombucha = <KombuchaDetails selectedKombucha={props.kombuchaList[props.selectedKombucha]}/>;
  }

  return(
    <div>
      <style jsx> {`
        .employee{
          position:static;
          background-color:white;
          top: 40em;
          bottom:30em;
        }

        .listEmployee{
          bottom: 400em;
          top:100em;
          position:static;
        }

      `}
      </style>
      <div className="employee">
        <p>Manager: <strong>Sabrina</strong></p>
        <p>Current CA: $30000</p>
        <p>Employees: 10</p>
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


Patron.propTypes = {
  kombuchaList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKombuchaSelection: PropTypes.func.IsRequired,
  sellBottle: PropTypes.func,
  kombuchaId: PropTypes.number,
  kombuchasList: PropTypes.array,
  onAddExistingKombucha: PropTypes.func,
  selectedKombucha: PropTypes.object
};


export default Patron;
