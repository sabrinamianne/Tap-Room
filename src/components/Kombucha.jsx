import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Kombucha(props){
      console.log(props.kombuchaId)
  const kombuchaInformation =
  <div>
    <h3>{props.brandKombucha}</h3>
    <h4>Price: ${props.price}</h4>
    <h4>Flavor: {props.flavorKombucha}</h4>
    <h4>Numbers of Bottle: {props.amountBottle}</h4>
    <button id="sell" onClick={() =>props.sellBottle(props.kombuchaId)}>Sell</button>
    <button id="delete" onClick={() =>props.deleteKombucha(props.kombuchaId)}>Delete</button>
  </div>


  if (props.currentRouterPath === '/patron'){
  return (
    <div>
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

        #sell{
          display: none;
        }

        #delete {
         display: none;
        }

      `}
      </style>
    <div className="kombucha" onClick={() => {props.onKombuchaSelection(props.kombuchaId);}}>{kombuchaInformation}</div>
    </div>
  );
} else if ((props.currentRouterPath === '/employee')){
  return (
    <div>
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
    <div className="kombucha" onClick={() => {props.onKombuchaSelection(props.kombuchaId);}}>{kombuchaInformation}</div>
    </div>
    )
  }
}

Kombucha.propTypes = {
  brandKombucha: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavorKombucha: PropTypes.string.isRequired,
  amountBottle: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string,
  onKombuchaSelection: PropTypes.func,
  kombuchaId: PropTypes.number.isRequired,
  deleteKombucha: PropTypes.func,
  sellBottle: PropTypes.func
}

export default Kombucha;
