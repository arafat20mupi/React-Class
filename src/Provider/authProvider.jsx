/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import  auth  from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)



    const createUser = async (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
            setUser(createUser);
            setLoading(false);
        })
        return () => unsubscribe();

    }, [user])

    const authInfo = { user, createUser , loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )


};

export default AuthProvider;