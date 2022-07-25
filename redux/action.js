import * as types from './actionType';
import axios from 'axios';

const signInUser = (user) => ({
    type: types.SIGN_IN_USER,
    payload: user,
})

export const signIn = (user) => {
    return function (dispatch) {
        axios.post(``)
        .then((response) => {
            console.log("response", response);
            dispatch(signInUser(response.data));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}