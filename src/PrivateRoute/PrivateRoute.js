import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { firebase } = useAuth();
    const { user, isLoading } = firebase;
    const location = useLocation();
    if (isLoading) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    else {
        return (
            user.email ? children : <Navigate replace to='/login' state={{ from: location }}></Navigate>
        );
    }

};

export default PrivateRoute;