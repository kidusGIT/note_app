import React, { useContext } from 'react'
import NoteContext from '../context'

export const darkTheme = {
    backgroundColor:'#2e2e2e',
    dimBackgroundColor: '#141414',
    fontColor:'#fff',
    dimFontColor: '#c0c0c0',
    rippleColor: '#131313',
    // selectioncolor: 'green'
}

export const lightTheme = {
    backgroundColor:'#fff',
    dimBackgroundColor: '#b1b1b1',
    fontColor:'black',
    dimFontColor: '#807e7e',
    rippleColor: '#6e6d6d',
}

export const color = () => {
    const { theme } = useContext(NoteContext);  
    return theme
}

