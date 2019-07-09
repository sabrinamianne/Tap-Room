import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div>
    <style jsx> {`
      .header {
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
      <div className="header">
        <h1>SK Kombucha Bar</h1>
          <Link to="/">Home</Link> | <Link to="/patron">Patron</Link> | <Link to="/employee">employee</Link>
      </div>
    </div>

  );
}

export default Header;
