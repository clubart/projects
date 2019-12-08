import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import RecipeStore from '../data/RecipeStore';

function getStores() {
  return [
    RecipeStore,
  ];
}

function getState() {
  return {
    recipe: RecipeStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);