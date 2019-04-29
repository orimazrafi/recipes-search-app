import React from 'react';

const Form = ({ onRecipe }) => (
  <form onSubmit={e => onRecipe(e)}>
    <input
      type='text'
      className='form-input'
      name='recipeName'
      placeholder='recipe...'
    />
    <button className='form-button'>Search</button>
  </form>
);

export default Form;
