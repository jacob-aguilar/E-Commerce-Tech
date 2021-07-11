import { types } from '../types/types';

export const setComputers = ( computers ) => ({
    type: types.computerLoad,
    payload: computers
});