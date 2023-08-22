/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Appearance } from 'react-native'

// USER CREATED FUNCTION IMPORT
import StackNavigation from './navigations/StackNavigation';
import NoteContext from './context';

const App = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);

  Appearance.addChangeListener((theme) => {
    setTheme(theme.colorScheme);
    // console.log('scheme: ', theme.colorScheme)
  })
  
  return (
    <NoteContext.Provider value={{ theme }} >   
        <StackNavigation />
    </NoteContext.Provider>
         
  );
};

export default App;
