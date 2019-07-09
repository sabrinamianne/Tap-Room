import React from 'react';
import {Link} from 'react-router-dom';

function Patron(){
  return(

    <div>
      <p>Patron Component</p>
      <Link to="/kegslist">Kegs List</Link>
        <Link to="/pints">Pints</Link>
    </div>
  );
}

export default Patron;
