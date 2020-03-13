import { push } from 'connected-react-router'

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
