import React from 'react';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';


function KombuchaList(props){
  return (
    <div>
    <style jsx> {`
      .list{
        margin-bottom:2%;
      }

    `}
    </style>
      <div className="list">
        {Object.keys(props.kombuchaList).map(function(kombuchaId) {
          var kombucha = props.kombuchaList[kombuchaId]
          return <Kombucha
          brandKombucha = {kombucha.brandKombucha}
          price = {kombucha.price}
          amountKeg = {kombucha.amountKeg}
          flavorKombucha = {kombucha.flavorKombucha}
          currentRouterPath={props.currentRouterPath}
          sellBottle={props.sellBottle}
          key = {kombuchaId}
          kombuchaId ={kombuchaId}
          onKombuchaSelection ={props.onKombuchaSelection}/>
        })}
      </div>
    </div>
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  sellBottle: PropTypes.func,
  onKombuchaSelection: PropTypes.func
};

export default KombuchaList;
