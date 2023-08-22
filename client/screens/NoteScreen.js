import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState, useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

// IMPORT COMPONENETS HERE
import { darkTheme, lightTheme } from '../utlis/colors'
import proxy from '../utlis/urlProxy';
import { DelteIcon, AddIcon, LeftHeader } from '../componentes/customeComponents'
import NoteContext from '../context'


const NoteScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [note, setNote] = useState({});
  
  const { theme } = useContext(NoteContext);  
  
  
  useEffect(() => {
    const getNote = async () => {
      
      if (route.params?.id === undefined) {
         return 0
      } else {
        console.log('id: ', route.params?.id)
        const response = await fetch(`${proxy.url}note-list/${route.params.id}`);
        const data = await response.json();

        setNote(data)
      }
    }

    getNote()
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Title',
      headerRight: () => route.params?.id === undefined ? <AddIcon note={note} /> : <DelteIcon id={route.params?.id} />,
      headerLeft: () => <LeftHeader note={note} id={route.params?.id} />
    });
  }, [navigation, note])

  const styles = StyleSheet.create({
    save:{
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 5,
    }, textArea:{
      backgroundColor: theme === 'light' ? lightTheme.backgroundColor : darkTheme.backgroundColor,
      // height:'100%',
      flex: 1,
      padding: 13,
      color: theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor,
      fontSize:16,
    }, backBtn:{
      marginLeft: 10,
      padding:8,
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

  return (
    <View style={{ flex:1 }}>
      <TextInput 
        style={styles.textArea}
        multiline={true}
        placeholder='Enter your text here'
        numberOfLines={20}
        textAlign='left'
        textAlignVertical='top'
        selectionColor='#7dc2f0'
        placeholderTextColor={ theme === 'light' ? lightTheme.dimFontColor : darkTheme.dimFontColor }
        value={note !== undefined ? note.notes : null }
        onChangeText={(text) => {setNote({ ...note, notes:text })}}
      />
    </View>
  )
}

export default NoteScreen

