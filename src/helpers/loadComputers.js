import { db } from "../firebase/firebase-config"

export const loadComputers = async () => {
    const computersSnap = await db.collection(`computers`).get();
    const computers = [];
    
    computersSnap.forEach( snapHijo => {
        computers.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    
    return computers;
}