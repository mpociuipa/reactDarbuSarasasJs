import firebase from "../firebase";
import {app} from "../firebase";
import 'firebase/compat/auth';
import { useAuthState as firebaseUseAuthState } from 'react-firebase-hooks/auth';



const auth = app.auth();
const db = app.firestore();

export const useAuthState = () => {
    const [user, loading, error] = firebaseUseAuthState(auth);

    return [user, loading, error];
};

const registerWithEmailAndPassword = async (name, email, password)=>{
    try{
        const  res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection('users').add({
            uid:user.uid,
            name,
            authProvider: "local",
            email
        })
    }catch(err){
        console.log(err)
    }

}

const logout = ()=>{
    auth.signOut()
}

const login = async (email, password)=>{
    try{
        await auth.signInWithEmailAndPassword(email, password)
    }catch(err){
        console.log(err)
    }
}

const sendPasswordReset = async (email)=>{
    try{
        await auth.sendPasswordResetEmail(email)
    }catch(err){
        console.log(err)
    }
}

export default firebase;

export {
    auth,
    db,
    registerWithEmailAndPassword,
    logout,
    login,
    sendPasswordReset
}