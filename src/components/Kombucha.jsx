import React from 'react';
import PropTypes from 'prop-types';

function Kombucha(props){
  const kombuchaInformation =
  <div>
    <h3>{props.brandKombucha}</h3>
    <h4>Price: {props.price} | Flavor: {props.flavor}</h4>
    <h4>Numbers of Bottle: {props.amountBottle}</h4>
  </div>

  return (
    <div>{kombuchaInformation}</div>
  )
}


Kombucha.propTypes = {
  brandKombucha: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  amountBottle: PropTypes.number.isRequired
}

export default Kombucha;
