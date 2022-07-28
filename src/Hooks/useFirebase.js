import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };
    useEffect(() => {
        onAuthStateChanged(auth, loggedUser => {
            if (loggedUser) {
                setUser(loggedUser);
            }
            else {
                setUser({});
            }
        })
    }, []);

    return {
        user,
        setUser,
        logOut,
        signInUsingGoogle
    }

}
export default useFirebase;