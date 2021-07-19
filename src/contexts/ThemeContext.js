import React, { createContext, Component } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
    state={
        isDarkTheme: true,
        lightTheme:{
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme:{
            text: '#fff',
            background:'#5c5c5c'
        }
    }
    render(){
        return(
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;