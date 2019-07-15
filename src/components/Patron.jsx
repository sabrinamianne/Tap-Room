import React from 'react';
import {Link} from 'react-router-dom';

function Patron(){
  return(

    <div>
      <p>Patron Component</p>
      <Link to="/kombuchalist">Kombucha List</Link><br></br>
        <Link to="/bottle">Bottle</Link>
    </div>
  );
}

export default Patron;
