import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const apiKey = '8b8427115f27a86a55a8ff37e40e26b8';

class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    try {
      const title = this.props.location.state.recipe;
      const req = await fetch(
        `https://www.food2fork.com/api/search?key=${apiKey}&q=${title}`
      );

      const { recipes } = await req.json();
      this.setState({ activeRecipe: recipes });
    } catch (ex) {
      console.log(ex);
    }
  };
  render() {
    const recipe = this.state.activeRecipe[0];
    return (
      <div className='container'>
        {recipe && recipe.image_url && (
          <div className='active-recipe'>
            <img
              className='acative-recipe__img'
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className='active-recipe__title'>{recipe.title}</h3>
            <h4 className='active-recipe__publisher'>
              Publisher: <span />
              {recipe.publisher}
            </h4>
            <p className='active-recipe__website'>
              Website:{' '}
              <span>
                {' '}
                <a href={recipe.publisher_url}> {recipe.publisher_url}</a>
              </span>
            </p>
            <button className='active-recipe__button'>
              <Link to='/'>Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
