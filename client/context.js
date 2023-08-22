import React,{ createContext, useState } from 'react'

const NoteContext = createContext();

export const NoteProvider  = ({ children }) => {
    // every components that wrap around NoteProvider will have acces to 
    // things inside value 
    const [theme, setTheme] = useState('');
    return (
        <NoteContext.Provider value={{ theme, setTheme }} > {children} </NoteContext.Provider>
    )
}

export default NoteContext;
  