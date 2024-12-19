/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    
    updateProfile
} from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Update Profile Settings
    const updateUserProfile = async (name) => {
        try {
            setLoading(true)
            await updateProfile(auth.currentUser, { displayName: name })
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
            setUser(createUser)
        })
        return () => unsubscribe()
    }, [])

    console.log(user);
    const authInfo = { createUser, user, LogIn, updateUserProfile, loading, }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )


};

export default AuthProvider;