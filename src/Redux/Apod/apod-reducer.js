import ApodActionTypes from "./apod-types";

const INITIAL_STATE = {
  isFetching: false,
  apodData: null,
  errorMessage: undefined
};

const apodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ApodActionTypes.SET_APOD_DATA_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case ApodActionTypes.SET_APOD_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        apodData: action.payload
      };
    }
    case ApodActionTypes.SET_APOD_DATA_ERROR: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default apodReducer;
