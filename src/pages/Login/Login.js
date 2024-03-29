import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { firebase } = useAuth();
    const { signInUsingGoogle, setUser, setIsLoading } = firebase;

    const location = useLocation();
    const navigate = useNavigate();
    const destination = location.state?.from.pathname || '/';
    // console.log(destination); renders many time
    const handleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                navigate(destination);
            })
            .finally(setIsLoading(false))
    }
    return (
        <div>
            <h2>Login</h2>
            <Button onClick={handleLogin} variant="success"><FontAwesomeIcon icon={faGoogle} /> Login Using Google</Button>
        </div>
    );
};

export default Login;