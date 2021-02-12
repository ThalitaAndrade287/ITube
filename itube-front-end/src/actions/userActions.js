import { push } from 'connected-react-router'
import axios from 'axios';

export const success = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        user
    }
})

export const failure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: {
        error
    }
})

const urlBase = 'https://us-central1-itube-back-end.cloudfunctions.net/app';

export const signUp = (name, email, dateOfBirth, password, photo) => async dispatch => {
    const newUser = {
        name,
        email,
        dateOfBirth,
        password,
        photo
    }
    const response = await axios.post(
        `${urlBase}/signup`, newUser
    );

    window.localStorage.setItem('token', response.data.result);

    if (response.status === 200) {
        dispatch(success())
        dispatch((push('/')))
    } else {
        dispatch(failure())
    }
}

const mockedUser = {
    email: "thalita.andrade@gmail.com",
    password: "123456"
  }

export const login = (email, password) => dispatch => {
    try {
        dispatch(success(mockedUser))
        dispatch(push("/"))
    } catch (e) {
        dispatch(failure(e))
    }

}




