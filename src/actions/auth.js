
import {types} from '../types/types'
import { db, facebookAuthProvider, firebase, googleAuthProvider } from '../firebase/firebase-config';



export const startLogin = (email, password) => {
    return (dispatch) => {

        setTimeout(()=>{
            dispatch( login("aguilat595@gmail.com", "Ale"));
        },3000);    
    }
}


export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
}


export const startFacebookLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( facebookAuthProvider )
            .then( user => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            }).catch((error) => alert(error.message));
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {
    return async( dispatch ) => {
        
         firebase.auth().signOut();
        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})


export const startComment = ({ description, calificacionUsuario }, name, id, ) => {
    return async (dispatch) => {

        const newComment = {
            description: description,
            name: name,
            id: id,
            calificacionUsuario: calificacionUsuario,
            date: new Date().getTime()
        }

        const doc = await db.collection(`comments`).add(newComment);

        dispatch(addNewComm(doc.id, newComment));
    }
}


export const addNewComm = (id, newCom) => ({
    type: types.addcomment,
    payload: {
        id, ...newCom
    }
})

 