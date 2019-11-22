import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RecipeList(props) {
    return (
    <ul>{
props.recipes.map((recipe, index) => <li key = {index} ><input onClick={event => {props.handleClickListener(recipe)}} type="radio"  value={recipe.name} name="recipe" /><NavLink to="/selectedRecipe">{recipe.name}</NavLink></li>)
    }</ul>
    );
}
