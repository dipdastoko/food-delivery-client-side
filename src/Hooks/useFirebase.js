import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(setIsLoading(false))
    };
    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, loggedUser => {
            if (loggedUser) {
                setUser(loggedUser);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, []);

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        logOut,
        signInUsingGoogle
    }

}
export default useFirebase;