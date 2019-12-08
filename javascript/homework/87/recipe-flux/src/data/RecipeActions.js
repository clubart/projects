import RecipeActionTypes from './RecipeActionTypes';
import RecipeDispatcher from './RecipeDispatcher';

const Actions = {
  showRecipe(recipe) {
    RecipeDispatcher.dispatch({
      type: RecipeActionTypes.SHOW_RECIPE,
      recipe,
    });
  },
};

export default Actions;