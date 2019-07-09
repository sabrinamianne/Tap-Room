import React from 'react';

function Form() {
  return(
    <div>
      <form>
        <input
          type='text'
          placeholder='Name'
          id='nameKeg'/>
        <input
          type='text'
          placeholder='Brand '
          id='brandKeg'/>
        <input
          type='number'
          placeholder='Price of a Pint'
          id='price'/>
        <input
          type='number'
          placeholder='Amount of Keg'
          id='amountKeg'/>
        <input
          type='text'
          placeholder='Flavor'
          id='flavorKeg'/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
