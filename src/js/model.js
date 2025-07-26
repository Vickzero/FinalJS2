import { API_URL } from './config.js';
import { getJSON } from './helpers.js'
import { RES_PER_PAGE } from './config.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

export const loadRecipe = async function (id) {
  try {
    //const res = await fetch(`${API_URL}/${id}`);
    const data = await getJSON(`${API_URL}/${id}`);
    const rec = data.data.recipe;

    state.recipe = {
      id: rec.id,
      title: rec.title,
      image: rec.image_url,
      publisher: rec.publisher,
      sourceUrl: rec.source_url,
      cookingTime: rec.cooking_time,
      servings: rec.servings,
      ingredients: rec.ingredients,
    };
  } catch (err) {
    console.error('Error al cargar receta:', err);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  state.search.query = query;

  try {
    const res = await fetch(`${API_URL}?search=${query}`);
    const data = await res.json();

    state.search.results = data.data.recipes.map(rec => ({
      id: rec.id,
      title: rec.title,
      image: rec.image_url,
      publisher: rec.publisher,
    }));
    state.search.page = 1; // Reinicia la págin
  } catch (err) {
    console.error('Error en búsqueda:', err);
    throw err;
  }
};

// paginacion

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};