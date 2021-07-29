import React, { createContext, useState } from 'react'

export const AuthContextFunc = createContext();

const AuthContextFuncProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeAuthStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return(
        <AuthContextFunc.Provider value={{ isLoggedIn, changeAuthStatus }}>
            { props.children }
        </AuthContextFunc.Provider>
    )
}

export default AuthContextFuncProvider;
