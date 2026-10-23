import {createContext, useState} from "react";

export const AuthStore = createContext(null);

function AuthContext({children}) {
    const [user, setUser] = useState(null);

    function login(user){
        setUser(user);
        console.log('user', user);
    }

    return (
        <AuthStore.Provider value={{user, login}}>{children}haha</AuthStore.Provider>
    )
}

export default AuthContext
