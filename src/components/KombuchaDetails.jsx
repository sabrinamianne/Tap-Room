import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function KombuchaDetails(props){
  return (
    <div>
      <h1>{props.selectedKombucha.brandKombucha} - {props.selectedKombucha.flavorKombucha}</h1>
      <h2>{props.selectedKombucha.price}- {props.selectedKombucha.amountBottle}</h2>
    </div>
  );
}

KombuchaDetails.propTypes = {
  selectedKombucha: PropTypes.object
};

export default KombuchaDetails;
