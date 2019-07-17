import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {withRouter} from 'react-router';
import Employee from './Employee';
import {Link} from 'react-router-dom'

function Form(props) {
  let _brandKombucha = null;
  let _price = null;
  let _amountBottle = null;
  let _flavorKombucha= null;


  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onAddNewKombucha({brandKombucha: _brandKombucha.value, price: _price.value, amountBottle: _amountBottle.value, flavorKombucha: _flavorKombucha.value, id: v4()});
    _brandKombucha.value = '';
    _price.value = '';
    _amountBottle.value ='';
    _flavorKombucha.value = '';
    props.history.push('/employee');
  }

  return(
    <div>
      <style jsx> {`
        .form {
          bottom: 10em;
          top: 200;
          margin-left:10em;
        }

        input {
          background-color: #ffecbd;
          width:15em;
          height: 3em;
          margin: 1em;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px;
          font-weight: bold;
        }

        #button {
          background-color: #ffecbd;
          width:15em;
          height: 3em;
        }

        #link {
          border: 1px solid black;
          color:black;
          font-weight: bold;
          background-color:orange;
        }

        #link:link {
          text-decoration: none;
        }

      `}
      </style>
      <div className="form">
        <h2>Add a new Kombucha </h2>
        <form onSubmit={handleNewKombuchaFormSubmission}>
          <input
            type='text'
            placeholder='Brand '
            id='brandKombucha'
            ref={(input) => { _brandKombucha= input;}}/>
          <input
            type='number'
            placeholder='Price'
            id='price'
            ref={(input) => { _price = input;}}/>
          <input
            type='number'
            placeholder='Amount of keg'
            id='amountBottle'
            ref={(input) => { _amountBottle = input;}}/>
          <input
            type='text'
            placeholder='Flavor'
            id='flavorKombucha'
            ref={(input) => { _flavorKombucha= input;}}/>
          <button id="button" type="submit">Add</button>
        </form><br></br>
      <Link to="/employee" id="link">Employee page</Link>
      </div>
    </div>
  );

}

Form.propTypes = {
  onAddNewKombucha: PropTypes.func,
  currentRouterPath: PropTypes.string,
};

export default withRouter(Form);
