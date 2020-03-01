import SearchActionTypes from "./search-types";
import {fetchSearchData, fetchImageData} from "../../Service/SearchService";

export const fetchSearchDataStart = () => ({
  type: SearchActionTypes.FETCH_SEARCH_DATA_START
});

export const fetchSearchDataSuccess = data => ({
  type: SearchActionTypes.FETCH_SEARCH_DATA_SUCCESS,
  payload: data
});

export const fetchSearchDataError = error => ({
  type: SearchActionTypes.FETCH_SEARCH_DATA_ERROR,
  payload: error
});

export const setSearchValue = value => ({
  type: SearchActionTypes.SET_SEARCH_VALUE,
  payload: value
});

export const fetchSearchDataAsync = value => {
  return dispatch => {
    dispatch(fetchSearchDataStart());

    fetchSearchData(value)
      .then(data => {
        console.log(data)
          const newData = data.collection.items.map(({data, links}) => ({data, links}) )
            dispatch(fetchSearchDataSuccess(newData));
      })
      .catch(error => dispatch(fetchSearchDataError(error.message)));
  };
};

export const fetchImageDataAsync = id => {
  return dispatch => {
    fetchImageData(id)
    .then(data => 
      dispatch({
        type: SearchActionTypes.SET_IMAGE_DATA,
        payload: data.collection.items[0]
      }))
    .catch(error => console.log(error))
  }
}

