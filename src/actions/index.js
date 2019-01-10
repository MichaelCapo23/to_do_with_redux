import types from './types';
import axios from 'axios';
import config  from '../config'


const {API_KEY, Base_URL} = config.api;

export function addNewItem(item) {
    const response = axios.post(Base_URL + API_KEY, item);

    return {
        type: types.ADD_NEW_TO_DO,
        payload: response
    }
}

export function getAllItems() {
    const resp = axios.get(Base_URL+API_KEY);

    return {
        type: types.GET_ALL_TO_DOS,
        payload: resp,
    }
}
