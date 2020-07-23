import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    token: ""
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;