import React, { Component } from 'react';
import './App.scss';
import Form from './componets/form';
import { API_KEY } from './config';
import Recipes from './componets/recipes';

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    try {
      const recipeName = e.currentTarget.recipeName.value;
      e.preventDefault();
      const apiCall = await fetch(
        `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
      );

      const { recipes } = await apiCall.json();
      this.setState({ recipes });
    } catch (ex) {
      console.log(ex);
    }
  };
  componentDidMount = () => {
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  };
  render() {
    return (
      <div className='app'>
        <Form onRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
