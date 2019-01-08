import types from './types';
import axios from 'axios';
import config  from '../config'

const {API_KEY, Base_URL} = config.api;

export function getAllItems() {
    console.log("yoyoyoyoyooy");
    const resp = axios.get(Base_URL+API_KEY);

    return {
        type: types.GET_ALL_TO_DOS,
        payload: resp,
    }
}
