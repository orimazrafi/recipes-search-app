import React from 'react';

const Form = ({ onRecipe }) => (
  <form onSubmit={e => onRecipe(e)} style={{ marginBottom: '2rem' }}>
    <input type='text' className='form__input' name='recipeName' />
    <button className='form__button'>Search</button>
  </form>
);

export default Form;
