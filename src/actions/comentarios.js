import { types } from "../types/types";

export const setComentarios = (comentarios) => ({
    type: types.comentariosLoad,
    payload: comentarios
})

export const newComentario = (comentario) => ({
    type: types.comentariosNew,
    payload: comentario
})