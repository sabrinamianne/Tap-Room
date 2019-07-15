import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function KombuchaDetails(props){
  return (
    <div>
      <h1>{props.selectedKombucha.brandKombucha} - {props.selectedKombucha.flavorKombucha}</h1>
      <h2>{props.selectedKombucha.price}- {props.selectedKombucha.amountKombucha}</h2>
      <Link to='/kegslist'>Return to the List</Link>
    </div>
  );
}

KombuchaDetails.propTypes = {
  selectedKombucha: PropTypes.object
};

export default KombuchaDetails;
