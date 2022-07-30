import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useFoods from '../Hooks/useFoods';
import useOreders from '../Hooks/useOrders';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const firebase = useFirebase();
    const allFoods = useFoods();
    const allOrders = useOreders();
    return (
        <AuthContext.Provider value={{ firebase, allFoods, allOrders }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;