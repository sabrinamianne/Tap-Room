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
          margin-bottom:2%;
          position:relative;
          background-color:white;

        }
        .listEmployee{
          position:relative;
          margin-bottom: 90px;

        }

      `}
      </style>
      <div className="employee">
        <p>Employee: <strong>Jessica</strong></p>
          <Link to="/form">Add a Kombucha</Link><br></br>
      </div>
      <div className="listEmployee">
        {optionalSelectedKombucha}
        <KombuchaList
          kombuchaList={props.kombuchaList}
          currentRouterPath={props.currentRouterPath}
          sellPints={props.sellPints}
          onKombuchaSelection={props.onKombuchaSelection}/>
      </div>
    </div>
  );
}


Employee.propTypes = {
  kombuchaList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKombuchaSelection: PropTypes.func.IsRequired,
  sellPints: PropTypes.func,
  selectedKombucha: PropTypes.object
};


export default Employee;
