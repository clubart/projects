import React, { Component } from 'react';
import App from './App';

// export default function SelectedRecipe(props) {
//     // const { name, ingredients, picture } = props.recipes;
//     const { recipes } = props;
//     return (
//         <>
//             <h2>{recipes.name}</h2>
//             <h4>{recipes.ingredients}</h4>
//             <img src={recipes.picture} />
//         </>
//     );
// }

export default class SelectedRecipe extends Component{
    render(){
       // const {recipe}= this.props;
        return (
                    <>
                        <h2>{this.props.recipe.name}</h2>
                        <h4>{this.props.recipe.ingredients}</h4>
                        <img src={this.props.recipe.picture} />
                    </>
                );
    }
}