import { types } from "../types/types";


const initialState = {
    notes: [],
    active: null
}

export const productsReducer = ( state = initialState, action ) => {
    switch (action.type) {
        
        case types.computerLoad:
            return {...state,
            computers: [...action.payload]
        }

        default:
            return state;
    }
}
