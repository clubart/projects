import React, { Component } from 'react';
import './App.css';
import './RecipeList.js'
import RecipeList from './RecipeList.js';
import SelectedRecipe from './SelectedRecipe';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Steak',
        ingredients: ["steak", "BBQ sauce", "spices"],
        picture: "https://www.google.com/search?safe=active&q=T-bone+steak&stick=H4sIAAAAAAAAAOOQUeLUz9U3MMyOLyo2EsrJLC5RyE9TKC5JTcxWSC4tKY4SKMhMLiktSoULn2JE6ICyTS1MjZOhbEvjdAPTU4xcIHZ6TpFJSRpMUYpZvBGUbZJWmWSIEC8ohLKNs3KLUmBqUvKKsqDstCLjtKxfjEI-GO5bxMoTopuUn5cKEQMAzpiVo9AAAAA&sa=X&ved=2ahUKEwjBgrC-m-jjAhUFm-AKHdAYBkEQxA0wFHoECAoQBQ"
      },
      {
        id: 2,
        name: "Potatoes",
        ingredients: ["potatoes", "salt", "pepper"],
        picture: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/9/2/0/garlmash_190.jpg.rend.hgtvcom.616.462.suffix/1383168517591.jpeg"
      },
      {
        id: 3,
        name: "Salad",
        ingredients: ["lettuce", "tomatoes", "dressing"],
        picture: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/4/FNM_040112-Spring-Greens-011_s4x3.jpg.rend.hgtvcom.196.147.suffix/1371606120248.jpeg"
      },
      {
        id: 4,
        name: "Peas",
        ingredients: ["frozen peas", "water", "salt"],
        picture: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/4/19/0/CCTIF108_Parmesan-Peas-recipe_s4x3.jpg.rend.hgtvcom.196.147.suffix/1429647081418.jpeg"
      }
    ]

  }

  handleClick = (recipe) => {
    console.log('im in handler', recipe);
    this.setState({
      selected: recipe
    });
  }
  render() {
    const selected = this.state.selected;
    return (
      <BrowserRouter>
        <header >
          <switch>
          <Route path="/" exact render = {()=><RecipeList recipes={this.state.recipes} handleClickListener={this.handleClick} />}/>
          <Route path="/selectedRecipe" render={()=> <SelectedRecipe recipe={selected} />  }/>          
            </switch>
        </header>
      </BrowserRouter>
    );
  }
}

export default App;
