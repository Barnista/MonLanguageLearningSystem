import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth'

export default {
    signInWithFacebook(auth, facebookProvider){
        return signInWithPopup(auth, facebookProvider)
    },
    signInWithGoogle(auth, googleProvider){
        return signInWithPopup(auth, googleProvider)
    },
    signInWithEmailAndPassword(auth, email, password){
        return signInWithEmailAndPassword(auth, email, password)
    },
    signUpWithEmailAndPassword(auth, email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
}