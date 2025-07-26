import * as model from './model.js';
import RecipeView from './views/recipeview.js';
import SearchView from './views/searchview.js';
import ResultsView from './views/resultsview.js';
import PaginationView from './views/paginationview.js';
import ResultsView from './views/resultsview.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpinner();

    await model.loadRecipe(id);

    RecipeView.render(model.state.recipe);
  } catch (err) {
    RecipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    ResultsView.renderSpinner();

    const query = SearchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    
    ResultsView.render(model.getSearchResultsPage());
    PaginationView.render(model.state.search);
    
  } catch (err) {
    RecipeView.renderError();
  }
};

const controlPagination = function (goToPage) {

  ResultsView.render(model.getSearchResultsPage(goToPage));
  PaginationView.render(model.state.search);

};

const init = function () {
  SearchView.addHandlerSearch(controlSearchResults);
  PaginationView.addHandlerClick(controlPagination);
  window.addEventListener('hashchange', controlRecipes);
  window.addEventListener('load', controlRecipes);
  
};

init();






/* import * as model from './model.js';
import { getQuery, addHandlerSearch } from './views/searchview.js';
import { renderResults } from './views/resultsview.js';
import { renderRecipe } from './views/recipeview.js';

const controlSearchResults = async function () {
  const query = getQuery();
  await model.loadSearchResults(query);
  renderResults(model.state.search.results);
};

const controlRecipe = async function (id) {
  await model.loadRecipe(id);
  renderRecipe(model.state.recipe);
};

addHandlerSearch(controlSearchResults);

document.querySelector('.results').addEventListener('click', function (e) {
  const recipeEl = e.target.closest('[data-id]');
  if (!recipeEl) return;
  const id = recipeEl.dataset.id;
  controlRecipe(id);
}); */



/* 
import {recipeView} from './views/recipeview.js'
import * as model from './model.js'

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    renderSpinner(recipeContainer); // Si aún no está dentro de recipeView, lo puedes mover allí

    await model.loadRecipe(id); // Carga los datos al state

    recipeView.render(model.state.recipe); // Renderiza la receta en la vista

  } catch (err) {
    alert(`Error: ${err}`);
  }
}; */