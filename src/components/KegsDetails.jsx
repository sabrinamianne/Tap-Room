import React from 'react';
import {Link} from 'react-router-dom';

function KegsDetails(){
  return (
    <div>
      <h1>Kombucha Component child</h1>
      <Link to='/kegslist'>Return to the List</Link>
    </div>
  );
}

export default KegsDetails;
