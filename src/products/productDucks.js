const TYPES = {
  fetchProducts: "product/fetchProducts",
  resetFilters: "product/resetFilters",
  updateFilters: "product/updateFilters",
};

export const fetchProducts = (products) => ({
  type: TYPES.fetchProducts,
  payload: products,
});

export const resetFilters = (selectedFilters) => ({
  type: TYPES.resetFilters,
  payload: selectedFilters,
});

export const updateFilter = (filterType, newValues) => ({
  type: TYPES.updateFilters,
  payload: { filterType, newValues },
});

const INITIAL_STATE_SELECTED_FILTERS = {
  size: [],
  color: [],
  gender: [],
};

const INITIAL_STATE_PRODUCTS = null;

const INITIAL_STATE = {
  products: INITIAL_STATE_PRODUCTS,
  selectedFilters: INITIAL_STATE_SELECTED_FILTERS,
};

const reducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.fetchProducts: {
      return { ...state, products: action.payload };
    }
    case TYPES.updateFilters: {
      const { filterType, newValues } = action.payload;
      return {
        ...state,
        selectedFilters: { ...state.selectedFilters, [filterType]: newValues },
      };
    }
    case TYPES.resetFilters: {
      return {
        ...state,
        selectedFilters: INITIAL_STATE_SELECTED_FILTERS,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
