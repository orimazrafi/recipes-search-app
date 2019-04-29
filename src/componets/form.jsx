import React from 'react';

const Form = ({ onRecipe }) => (
  <form onSubmit={e => onRecipe(e)} style={{ marginBottom: '2rem' }}>
    <input type='text' className='form-input' name='recipeName' />
    <button className='form-button'>Search</button>
  </form>
);

export default Form;
