import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useFirebase from '../../Hooks/useFirebase';


const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <Button onClick={signInUsingGoogle} variant="success"><FontAwesomeIcon icon={faGoogle} /> Login Using Google</Button>
        </div>
    );
};

export default Login;