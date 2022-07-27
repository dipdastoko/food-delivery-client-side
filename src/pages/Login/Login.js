import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { firebase } = useAuth();
    const { signInUsingGoogle } = firebase;
    useAuth();
    return (
        <div>
            <h2>Login</h2>
            <Button onClick={signInUsingGoogle} variant="success"><FontAwesomeIcon icon={faGoogle} /> Login Using Google</Button>
        </div>
    );
};

export default Login;