import { types } from "../types/types";

const initialState = {
	comentarios: []
};

export const comentariosReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.comentariosNew:
			return {comentarios: [...state.comentarios, action.payload]};
			
		case types.comentariosLoad:
			return {comentarios: action.payload};

		default:
			return state;
	}
};
