import React, { Component, createContext } from 'react'

export const AuthContext = createContext();

class AuthContextProvider extends Component{
    state = {
        isLoggedIn: false
    };

    changeAuthStatus = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
    };

    render(){
        console.log(this.props.children)
        return(
            <AuthContext.Provider value={{...this.state, changeAuthStatus: this.changeAuthStatus}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;
