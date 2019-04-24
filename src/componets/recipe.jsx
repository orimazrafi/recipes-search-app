import React, { Component } from 'react';
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
      console.log(recipes[0]);
      // this.setState({ recipes });
    } catch (ex) {
      console.log(ex);
    }
  };
  render() {
    console.log(this.props);

    return <div>Recipe Component!</div>;
  }
}

export default Recipe;
