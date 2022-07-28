import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { firebase } = useAuth();
    const { user } = firebase;
    const location = useLocation();
    return (
        user.email ? children : <Navigate replace to='/login' state={{ from: location }}></Navigate>
    );
};

export default PrivateRoute;