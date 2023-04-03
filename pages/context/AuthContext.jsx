import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({ isLoggedIn: false });


export const AuthContextProvider = props => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(true);
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;