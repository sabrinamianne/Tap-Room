import React from 'react';
import {Link} from 'react-router-dom';
import img from '../assets/img/tap-room.jpg';

function Header(){
  return(
    <div>
    <style jsx> {`
      .header {
        height:100px;
        margin-bottom: 33%;
      }
      h1 {
        text-align: center;
      }

      #imgHeader {
      width:80em;
      height: 30em;
      margin-left:10%;
      margin-right:10%;


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
        <Link to="/">Home</Link> <br></br><br></br> <Link to="/patron">Patron</Link> | <Link to="/employee">Employee</Link>
        <img id="imgHeader" src={img}></img>
        <h1>SK Kombucha Bar</h1>
        <hr/>
      </div>
    </div>

  );
}

export default Header;
