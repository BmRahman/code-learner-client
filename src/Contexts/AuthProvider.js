import React from 'react';
import { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth';
import app from './../firebase/firebase.init';

export const AuthContext = createContext()
        const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // google sign in
    const provider = new GoogleAuthProvider();
    
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    // sign in with email password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => unsubscribe
    } , [])


    const authInfo = {user, createUser, loginUser, googleLogin}
    return (
        <div>
            <AuthContext.Provider value={authInfo}> 
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;