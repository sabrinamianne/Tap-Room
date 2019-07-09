import React from 'react';
import KegsDetails from './KegsDetails';
import {Link} from 'react-router-dom';

function KegsList(){
  return (
    <div>
      <h1>Kombucha List component parent of Kombucha</h1>
      <Link to="/kegdetails">Details of each Kombucha's Keg</Link>
    </div>
  );
}

export default KegsList;
