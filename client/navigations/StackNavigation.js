import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

// IMPORT FILES HERE
import ListScreen from '../screens/ListScreen'
import NoteScreen from '../screens/NoteScreen'
import { lightTheme, darkTheme } from '../utlis/colors'
import NoteContext from '../context'


const StackNavigation = () => {
    const Stack = createStackNavigator();
    const { theme } = useContext(NoteContext);  
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='List' screenOptions={{
                headerStyle:{
                    backgroundColor: theme === 'light' ? lightTheme.dimBackgroundColor : darkTheme.dimBackgroundColor,
                    
                }, headerTintColor: theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor
            }}>
                <Stack.Screen name='List' component={ListScreen} />
                <Stack.Screen name='Note' component={NoteScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

