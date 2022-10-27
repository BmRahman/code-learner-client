import React from 'react';
import { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth';
import app from './../firebase/firebase.init';

export const AuthContext = createContext()
        const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    // google sign in
    const provider = new GoogleAuthProvider();
    
    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    // sign in with email password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const userLogout = () => {
        setLoader(true)
        return signOut(auth)
    }
    
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubscribe
    }, [])


    const authInfo = {user, loader, createUser, loginUser, googleLogin, userLogout}
    return (
        <div>
            <AuthContext.Provider value={authInfo}> 
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;