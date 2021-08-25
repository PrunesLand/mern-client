import * as api from '../API'
import { AUTH } from '../constants/actionType';

export const signin = (formData, history) => async (dispatch) => {
    try {
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}


export const signup = (formData, history) => async (dispatch) => {
    try {
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}