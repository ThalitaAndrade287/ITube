export const sucessMessage = (message) => ({
    type: 'SUCCESS_MESSAGE',
    payload: {
        message
    }
})

export const errorMessage = (message) => ({
    type: 'ERROR_MESSAGE',
    payload: {
        message
    }
})