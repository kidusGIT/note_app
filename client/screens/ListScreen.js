import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState, useContext } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'

// IMPORT YOUR OWN MODULE HERE
import ListName from '../componentes/ListName'
import AddBtn from '../componentes/AddBtn'
import { darkTheme, lightTheme } from '../utlis/colors'
import proxy from '../utlis/urlProxy'
import NoteContext from '../context'

const ListScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused()

  const [notes, setNotes] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Note List',
    })
  }, [])
  
  const { theme } = useContext(NoteContext);  
  
  useEffect(() => {

    const getNotes = async () => {
      const response = await fetch(`${proxy.url}note-list`);
      const data = await response.json();

      setNotes(data);
    }
    if(isFocused){
      getNotes()
    }

  }, [isFocused])

  const styles = StyleSheet.create({
    container:{
      backgroundColor: theme === 'light' ? lightTheme.backgroundColor : darkTheme.backgroundColor,
      flex: 2,
      position: 'relative',
    },
    header:{
      backgroundColor: theme === 'light' ? lightTheme.backgroundColor : darkTheme.backgroundColor,
      flexDirection: 'row',
      alignItems:'center',
      padding: 7,
    },
    counter:{
      color:  theme === 'light' ? lightTheme.dimFontColor : darkTheme.dimFontColor,
      fontSize:22,
      paddingRight: 10,
    },
    title:{
      color:'orange',
      fontSize:28,
      fontWeight: 'bold',
      flex:1,
    }
   })

  return (
    <View style={styles.container}>
      <View style={styles.header} >
          <Text style={styles.title}> &#9782; Notes</Text>
          <Text style={styles.counter}> {notes.length} </Text>
      </View>
      <FlatList 
        data={notes}
        renderItem={(itemData) =>
          <ListName note={itemData.item.notes} 
            id={itemData.item.id}
            date={itemData.item.createdAt}
          />          
        }
      />
      
      <AddBtn />
    </View>
  )
}

export default ListScreen

