import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    return {
        user,
        signInUsingGoogle
    }

}
export default useFirebase;