import { types } from "../types/types";

const initialState = {
    computers: [],
    active: null
}

export const computersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.computerLoad:
            return {
                ...state,
                computers: action.payload
            }
        default:
            return state;
    }
}