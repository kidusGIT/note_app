import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

// IMPORT COMPONENTS HERE
import { darkTheme, lightTheme } from '../utlis/colors'
import NoteContext from '../context'

const AddBtn = () => {
  const navigation = useNavigation();
  const { theme } = useContext(NoteContext);  

  return (
    <Pressable
      style={styles.container}
      android_ripple={{
        color: theme === 'light' ? lightTheme.rippleColor : darkTheme.rippleColor,
        radius: 30,
      }}

      onPress={() => navigation.navigate('Note')}
      >
      <Icon 
        name='add'
        size={40}
        color={ theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor }
      />
    </Pressable>
  )
}

export default AddBtn

const styles = StyleSheet.create({
  container:{
    backgroundColor:'orange',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})