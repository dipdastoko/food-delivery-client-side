import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useFoods from '../Hooks/useFoods';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const firebase = useFirebase();
    const allFoods = useFoods();
    return (
        <AuthContext.Provider value={{ firebase, allFoods }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;