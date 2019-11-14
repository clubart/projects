import React from 'react';

export default function RecipeList(props) {
    return (
    <ul>{
props.recipes.map((recipe, index) => <li key = {index} ><input onClick={event => {props.handleClickListener(recipe)}} type="radio"  value={recipe.name} name="recipe" />{recipe.name}</li>)
    }</ul>
    );
}
