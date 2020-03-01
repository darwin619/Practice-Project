import SearchActionTypes from "./search-types";

const INITIAL_STATE = {
  isFetching: false,
  searchData: [],
  errorMessage: undefined,
  searchValue: "",
  imageData: null
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.FETCH_SEARCH_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case SearchActionTypes.FETCH_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchData: action.payload
      };
    case SearchActionTypes.FETCH_SEARCH_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case SearchActionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case SearchActionTypes.SET_IMAGE_DATA:
      return {
        ...state,
        imageData: action.payload
      }
    default:
      return state;
  }
};

export default searchReducer;
