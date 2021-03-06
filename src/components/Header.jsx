import React from 'react';
import img from '../assets/img/tap-room.jpg';

function Header(){
  return(
    <div>
    <style jsx> {`
      .header {
        height:100px;
        margin-bottom:32%;
        position: sticky;
      }
      h1 {
        text-align: center;
      }

      #imgHeader {
      width:90%;
      height: 30em;
      margin-left:5%;
      margin-right:5%;
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
        <img id="imgHeader" src={img}></img>
        <h1>Sk Kombucha Tap-Room</h1>

        <hr/>
      </div>
    </div>

  );
}

export default Header;
