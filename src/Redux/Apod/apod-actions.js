import {fetchApod} from '../../Service/ApodService';
import ApodActionTypes from './apod-types';

export const getApodStart = () => ({
    type: ApodActionTypes.SET_APOD_DATA_START
});

export const getApodSuccess = apodData => ({
    type: ApodActionTypes.SET_APOD_DATA_SUCCESS,
    payload: apodData
});

export const getApodError = error => ({
    type: ApodActionTypes.SET_APOD_DATA_ERROR,
    payload: error
});

const getApodAsync = () => {
    return dispatch => {
    dispatch(getApodStart());
    fetchApod()
    .then(data => {
        const apodData = data;
        dispatch(getApodSuccess(apodData))
    })
    .catch(error => dispatch(getApodError(error.message)))
}
}

export default getApodAsync;

