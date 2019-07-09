import React from 'react';
import {Link} from 'react-router-dom';

function Employee(){
  return(
    <div>
      <p>Employee Component</p>
      <Link to="/form">Add a Kombucha</Link>
      <Link to="/pints">Pints</Link>
      <Link to="/edit">Edit</Link>
    </div>
  );
}

export default Employee;
