import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Kombucha(props){
  const kombuchaInformation =
  <div>
    <h3>{props.brandKombucha}</h3>
    <h4>Price: ${props.price}</h4>
    <h4>Flavor: {props.flavorKombucha}</h4>
    <h4>Numbers of Bottle: {props.amountKeg}</h4>
    <button onClick={() =>props.sellBottle(props.kombuchaId)}>Sell</button>

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

  if (props.currentRouterPath === '/employee' || props.currentRouterPath === '/patron'){
  return (
    <div className="kombucha" onClick={() => {props.onKombuchaSelection(props.kombuchaId);}}>{kombuchaInformation}</div>
  );
} else {
  return (
    <div className="kombucha"></div>
    )
  }
}

Kombucha.propTypes = {
  brandKombucha: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavorKombucha: PropTypes.string.isRequired,
  amountKeg: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string,
  onKombuchaSelection: PropTypes.func,
  kombuchaId: PropTypes.number.isRequired,
  sellBottle: PropTypes.func
}

export default Kombucha;
