import React from 'react';
import { Link } from 'react-router-dom';
const Recipes = ({ recipes }) => (
  <div className='container'>
    <div className='row'>
      {recipes &&
        recipes.length > 0 &&
        recipes.map(recipe => {
          return (
            <div
              className='col-lg-4 col-md-6 '
              key={recipe.recipe_id}
              style={{ marginBottom: '2rem' }}
            >
              <div className='recipes-box'>
                <img
                  className='recipe-box-img'
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className='recipe-text'>
                  <h5>
                    {' '}
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}...`}
                  </h5>
                  <p className='recipe-subtitle'>
                    {' '}
                    Publisher: <span>{recipe.publisher}</span>
                  </p>
                </div>
                <button className='recipes-buttons'>
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.recipe_id}`,
                      state: { recipe: recipe.title }
                    }}
                  >
                    {' '}
                    View Recipe{' '}
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  </div>
);
export default Recipes;
