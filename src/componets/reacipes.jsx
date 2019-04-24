import React from 'react';
const Recipes = ({ recipes }) => (
  <div className='container'>
    <div className='row'>
      {recipes.map(recipe => {
        return (
          <div
            className='col-md-4'
            key={recipe.recipe_id}
            style={{ marginBottom: '2rem' }}
          >
            <div className='recipe__box'>
              <img
                className='recipe__box-img'
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className='recipe__text'>
                <h5> {recipe.title}</h5>
                <p className='recipe__subtitle'>
                  {' '}
                  Publisher: <span>{recipe.publisher}</span>
                </p>
              </div>
              <button className='recipe__button'>View Recipe</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
export default Recipes;
