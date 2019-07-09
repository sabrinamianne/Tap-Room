import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div>
    <style jsx> {`
      div {
        background-color: orange;
        margin-bottom: 2%;
      }
      h1 {
        text-align: center;
      }

    `}
    </style>
    <style global jsx> {`
      a{
        color: black;
      }
    `}
    </style>
      <h1>SK Kombucha Bar</h1>
      <Link to="/patron">Patron</Link> | <Link to="/employee">employee</Link>

  </div>
  );
}

export default Header;
