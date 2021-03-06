import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer'
import { notesReducer } from '../reducers/notesReducer';
import { productsReducer } from '../reducers/productsReducer';
import { comentariosReducer } from '../reducers/comentariosReducer';
import { computersReducer } from '../reducers/computersReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
 auth: authReducer,
 products: productsReducer,
 computers: computersReducer,
 comentarios: comentariosReducer,
 notes: notesReducer,
})

 
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);