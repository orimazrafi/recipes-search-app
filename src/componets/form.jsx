import React from 'react';

const Form = ({ onRecipe }) => (
  <form onSubmit={e => onRecipe(e)}>
    <input type='text' name='recipeName' />
    <button>Search</button>
  </form>
);

export default Form;
