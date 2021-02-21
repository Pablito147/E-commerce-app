import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, acction) => {
    switch (acction.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: acction.payload
            };

        default:
            return state;
    }
}

export default userReducer;