import React from 'react';
import {Link} from 'react-router-dom';

function Employee(){
  return(
    <div>
      <p>Employee Component</p>
      
      <Link to="/form">Add a Kombucha</Link><br></br>
      <Link to="/pints">Pints</Link><br></br>
      <Link to="/edit">Edit</Link>
    </div>
  );
}

export default Employee;
