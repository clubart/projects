import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeActions from '../data/RecipeActions';

export default class AppView extends Component {

  state = {
    recipes: [
      {
        id: 1,
        name: 'Chulent',
        ingredients: ['meat', 'potatoes', 'all sorts of beans'],
        directions: ['add ingredients to pot', 'cook for many hours'],
        picture: 'https://blog.shabbat.com/wp-content/uploads/2015/06/a1.jpg'
      },
      {
        id: 2,
        name: 'Macaroni',
        ingredients: ['macaroni', 'water', 'salt'],
        directions: ['add ingredients to pot', 'cook for 10 minutes'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDVL2DD4me3bX-rWF6DwGsHquSdUW3vkubGTgvfeanC7fg164&s'
      }
    ]//,
    //selectedRecipe: null
  }

  handleSelectRecipe = (event, recipe) => {
    //console.log('Recipe selected', recipe);
    RecipeActions.showRecipe(recipe);
  }


  render() {
    // recipe list should probably be own component, but we arent up to that yet...
    const recipeList = <ul className="bulletlessList">{this.state.recipes.map(recipe => <li key={recipe.id} onClick={event => this.handleSelectRecipe(event, recipe)}>{recipe.name}</li>)}</ul>;
    const recipeDetails = this.state.selectedRecipe ?
      <RecipeDetails {...this.props} /> :
      <h3>Please choose one of our delicious recipes</h3>;

    return (
      <div className="container">
        <div className="text-center">
          <h1>PCS Recipes</h1>
          <hr />
          {recipeList}
          <hr />
          {recipeDetails}
        </div>
      </div>
    );
  }
}
