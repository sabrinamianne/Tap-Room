import React from 'react';
import Header from './Header';
import {withRouter} from 'react-router';
import Employee from './Employee';
import PropTypes from 'prop-types';

function Home(props) {
  let _passwordEmployee = null;
  let _passwordPatron = null;

  function handleCheckPasswordEmployee(event) {
    event.preventDefault();
    if (_passwordEmployee.value == 1234) {
      props.history.push('/employee');
    }
    else {
      alert("Invalid Password, Please try again.");
    }
    _passwordEmployee.value = '';
  }

  function handleCheckPasswordPatron(event) {
    event.preventDefault();
    if (_passwordPatron.value == 1988) {
      props.history.push('/patron');
    }
    else {
      alert("Invalid Password, Please try again.");
    }
    _passwordPatron.value = '';
  }

  return(
    <div>
      <style jsx> {`
          .employeeSide {

            position:fixed;
            background-color: white;
            margin-left:30%;
            bottom: 10em;
            top: 200;
          }
          .patronSide {
            top: 200;
            position:fixed;
            background-color: white;
            margin-left:55%;
            bottom: 10em;

          }

          input {
            width:210px;
            height: 30px;
            font-size: 16px;
          }

          #buttonA {
            background-color: black;
            color: orange;
            width:60px;
            height: 35px;
            margin-left:10px;
            border-radius: 50%;
          }

          #buttonB {
            background-color: black;
            color: orange;
            width:60px;
            height: 35px;
            margin-left:10px;
            border-radius: 50%;
          }

          `}
      </style>
      <div className="employeeSide">
        <h2>Employee</h2>
        <p><em>password: 1234</em></p>
        <form onSubmit={handleCheckPasswordEmployee}>
          <input
            type='password'
            maxLength= "4"
            placeholder='Please enter your Password'
            id='passwordE'
            ref={(input) => { _passwordEmployee = input;}}/>
          <button id="buttonA" type="submit">Sign-in</button>
        </form>
        </div>
        <div className="patronSide">
          <h2>Manager</h2>
          <p><em>password: 1988</em></p>
          <form onSubmit={handleCheckPasswordPatron}>
            <input
              type='password'
              maxLength= "4"
              placeholder='Please enter your Password'
              id='passwordP'
              ref={(input) => { _passwordPatron = input;}}/>
            <button id="buttonB" type="submit">Sign-in</button>
          </form>
          </div>
    </div>
  );
}

export default withRouter(Home);
