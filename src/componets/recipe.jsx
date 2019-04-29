import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../config';

class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    try {
      const title = this.props.location.state.recipe;
      const req = await fetch(
        `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
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
              className='active-recipe-img'
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className='active-recipe-title'>{recipe.title}</h3>
            <h4 className='active-recipe-publisher'>
              Publisher: <span className='publisher'>{recipe.publisher}</span>
            </h4>
            <p className='active-recipe-website'>
              Website:{' '}
              <span className='website'>
                {' '}
                <a href={recipe.publisher_url}> {recipe.publisher_url}</a>
              </span>
            </p>
            <button className='active-recipe-button'>
              <Link to='/'>Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
