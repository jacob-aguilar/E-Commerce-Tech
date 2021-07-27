import { db } from "../firebase/firebase-config"

export const loadComentarios = async () => {
    const comentariosSnap = await db.collection(`comments`).get();
    const comentarios = [];
    
    comentariosSnap.forEach( snapHijo => {
        comentarios.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return comentarios
}