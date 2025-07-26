import View from './view.js';
import icons from 'url:../../img/icons.svg';

class RecipeView extends View {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';

    _generateMarkup() {
        return `
        <figure class="recipe__fig">
            <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
            <h1 class="recipe__title">
                <span>${this._data.title}</span>
            </h1>
        </figure>
                <div class="recipe__details">
                    <div class="recipe__info">
                        <svg class="recipe__info-icon">
                            <use href="${icons}#icon-clock"></use>
                        </svg>
                        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime
            }</span>
                        <span class="recipe__info-text">minutes</span>
                    </div>
                    <div class="recipe__info">
                        <svg class="recipe__info-icon">
                            <use href="${icons}#icon-users"></use>
                        </svg>
                            <span class="recipe__info-data recipe__info-data--people">${this._data.servings
            }</span>
                            <span class="recipe__info-text">servings</span>

                        <div class="recipe__info-buttons">
                            <button class="btn--tiny btn--increase-servings">
                            <svg>
                                <use href="${icons}#icon-minus-circle"></use>
                            </svg>
                            </button>
                            <button class="btn--tiny btn--increase-servings">
                            <svg>
                                <use href="${icons}#icon-plus-circle"></use>
                            </svg>
                            </button>
                        </div>
                    </div>

                    <div class="recipe__user-generated">
                        <svg>
                            <use href="${icons}#icon-user"></use>
                        </svg>
                        </div>
                        <button class="btn--round">
                            <svg class="">
                                <use xlink:href="${icons}#icon-bookmark-fill"></use>
                            </svg>
                        </button>
                    </div>
                ${this._data.ingredients
                .map(
                    ing => `
                        <li class="recipe__ingredient">
                            <svg class="recipe__icon">
                                <use xlink:href="${icons}#icon-check"></use>
                            </svg>
                            <div class="recipe__quantity">${ing.quantity}</div>
                            <div class="recipe__description">
                                <span class="recipe__unit">${ing.unit}</span>
                                ${ing.description}
                            </div>
                        </li>
                    `
                )
                .join('')}
                    </div>

                <div class="recipe__directions">
                    <h2 class="heading--2">How to cook it</h2>
                    <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__publisher">${this._data.publisher
            }</span>. Please check out
                    directions at their website.
                    </p>
                    <a
                    class="btn--small recipe__btn"
                    href="${this._data.sourceUrl}"
                    target="_blank"
                    >
                    <span>Ver receta completa</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                    </a>
                </div>
    `;
    }
}

export default new RecipeView();


/* import{icons} from '../../img/icons.svg'

export const renderRecipe = function (recipe) {
    const container = document.querySelector('.recipe');
    container.innerHTML = '';
    console.log(recipe.ingredients);
    const markup = `

        <figure class="recipe__fig">
            <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
            <h1 class="recipe__title">
                <span>${recipe.title}</span>
            </h1>
        </figure>
        <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${icons}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${
                  recipe.cookingTime
                }</span>
                <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${icons}#icon-users"></use>
                </svg>
                    <span class="recipe__info-data recipe__info-data--people">${
                      recipe.servings
                    }</span>
                    <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--increase-servings">
                    <svg>
                        <use href="${icons}#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--increase-servings">
                    <svg>
                        <use href="${icons}#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
            </div>

            <div class="recipe__user-generated">
                <svg>
                    <use href="${icons}#icon-user"></use>
                </svg>
                </div>
                <button class="btn--round">
                    <svg class="">
                        <use xlink:href="${icons}#icon-bookmark-fill"></use>
                    </svg>
                </button>
            </div>
        ${recipe.ingredients
            .map(
            ing => `
                <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                        <use xlink:href="${icons}#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${ing.quantity}</div>
                    <div class="recipe__description">
                        <span class="recipe__unit">${ing.unit}</span>
                        ${ing.description}
                    </div>
                </li>
            `
            )
            .join('')}
            </div>

        <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
            recipe.publisher
            }</span>. Please check out
            directions at their website.
            </p>
            <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
            >
            <span>Ver receta completa</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
            </a>
        </div>
    `;

    container.insertAdjacentHTML('afterbegin', markup);
  };
   */











/* import icons from 'url:../../img/icons.svg';


class RecipeView {

    #parentElement = document.querySelector('.recipe-container');
    #data;

    // Método público renderSpinner
    renderSpinner() {
        const markup = `
        <div class="spinner">
            <svg>
            <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
        `;
        this.#parentElement.innerHTML = '';
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    render(data) {
        this.#data = data;
        this.#clear();
        const markup = this.#generateMarkup();
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    #clear() {
        this.#parentElement.innerHTML = '';
    
    }
    #generateMarkup() {
        return `
        <div class="recipe">
            <h1>${this.#data.title}</h1>
            <p>${this.#data.description}</p>
        </div>
    `;
    }
}

export const recipeView = new RecipeView(); */