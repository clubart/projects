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
        const { name, ingredients, picture } = this.props.recipe; 
        return (
                    <>
                        <h2>{name}</h2>
                        <h4>{ingredients}</h4>
                        <img src={picture} />
                    </>
                );
    }
}