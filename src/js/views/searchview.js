class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();


/* export const getQuery = () => {
    return document.querySelector('.search input').value;
  };
  
  export const addHandlerSearch = function (handler) {
    document.querySelector('.search button').addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  };
   */