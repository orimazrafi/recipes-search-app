import React, { Component } from 'react';
import './App.css';
import Form from './componets/form';
import Recipes from './componets/reacipes';
const apiKey = '8b8427115f27a86a55a8ff37e40e26b8';

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    try {
      const recipeName = e.currentTarget.recipeName.value;
      e.preventDefault();
      const apiCall = await fetch(
        `https://www.food2fork.com/api/search?key=${apiKey}&q=${recipeName}&page=2`
      );
      const { recipes } = await apiCall.json();
      this.setState({ recipes });
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'> recipe Search</h1>
        </header>
        <Form onRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
