import View from './view.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResultsView();



/* export const renderResults = function (recipes) {
  const container = document.querySelector('.results');
  container.innerHTML = '';

  recipes.forEach(rec => {
    const markup = `
 
      <div class="result" data-id="${rec.id}">
          <li class="preview">
          <a class="preview__link preview__link--active" href="#">
            <figure class="preview__fig">
              <img src="${rec.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${rec.title}</h4>
              <p class="preview__publisher">${rec.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="src/img/icons.svg#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);
  });
};
 */





/*${recipe.ingredients
  .map(ing => {
  return `
  <li class="recipe__ingredient">
  <svg class="recipe__icon">
  <use href="src/img/icons.svg#icon-check"></use>
  </svg>
  <div class="recipe__quantity">${ing.quantity}</div>
  <div class="recipe__description">
  <span class="recipe__unit">${ing.unit}</span>
  ${ing.description}
  </div>
  </li>
  `;
  }).join('')}
  </div>*/