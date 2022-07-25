const initialState = {
    users: [],
    user: {},
    loading: false
}

const usersReducers = (state= initialState, action) => {
    switch(action.type) {
        case types.SIGN_IN_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default:
            return state;
    }
}