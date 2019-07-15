import React from 'react';
import PropTypes from 'prop-types';

function Kombucha(props){
  const kombuchaInformation =
  <div>
    <h3>{props.brandKombucha}</h3>
    <h4>Price: ${props.price}</h4>
    <h4>Flavor: {props.flavorKombucha}</h4>
    <h4>Numbers of Bottle: {props.amountBottle}</h4>
    <style jsx> {`
      .kombucha {
        border: 1px solid #ffc96b;
        background-color: #ffc96b;
        width: 11em;
        margin: 5px;
        float: left;
        margin-left:5px;
        padding: 3px;
        margin-top:2%;
      }

    `}
    </style>
  </div>

  return (
    <div className="kombucha">{kombuchaInformation}</div>

  )
}


Kombucha.propTypes = {
  brandKombucha: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  amountBottle: PropTypes.number.isRequired
}

export default Kombucha;
