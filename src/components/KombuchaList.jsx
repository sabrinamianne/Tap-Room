import React from 'react';
import Kombucha from './Kombucha';

import PropTypes from 'prop-types';


function KombuchaList(props){
  return (
    <div>

        {Object.keys(props.kombuchaList).map(function(kombuchaId) {
          var kombucha = props.kombuchaList[kombuchaId]
          return <Kombucha
          brandKombucha = {kombucha.brandKombucha}
          price = {kombucha.price}
          amountBottle = {kombucha.amountBottle}
          flavorKombucha = {kombucha.flavorKombucha}
          currentRouterPath={props.currentRouterPath}
          key = {kombuchaId}
          kombuchaId ={kombuchaId}
          onKombuchaSelection ={props.onKombuchaSelection}/>
        })}

    </div>
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKombuchaSelection: PropTypes.func
};

export default KombuchaList;