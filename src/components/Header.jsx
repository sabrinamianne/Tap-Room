import React from 'react';
import {Link} from 'react-router-dom';
import img from '../assets/img/tap-room.jpg';

function Header(){
  return(
    <div>
    <style jsx> {`
      .header {
        height:100px;
        margin-bottom:32%;
      }
      h1 {
        text-align: center;
      }

      #imgHeader {
      width:100%;
      height: 30em;
      margin-top:1%;
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
        <Link to="/">Home</Link> | <Link to="/patron">Patron</Link> | <Link to="/employee">Employee</Link><br></br>
        <img id="imgHeader" src={img}></img>
        <h1>Sk Kombucha Tap-Room</h1>

        <hr/>
      </div>
    </div>

  );
}

export default Header;
