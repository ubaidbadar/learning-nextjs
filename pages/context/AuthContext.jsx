import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({ isLoggedIn: false });


const AuthContextProvider = props => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // setLoggedIn(true);
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;