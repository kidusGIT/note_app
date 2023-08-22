import React, {useContext} from 'react'
import { useNavigation} from '@react-navigation/native'
import { View, Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IonIcon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'

// IMPORT COMPONENTS HERE
import { darkTheme, lightTheme } from '../utlis/colors'
import proxy from '../utlis/urlProxy';
import NoteContext from '../context'

// DELETE FUNCTION 
async function deleteNote (id) {
    const response = await fetch(`${proxy.url}note-delete/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type':'application/json',
        }, 
    })
    const data = await response.json()
    console.log('response: ', data)
}

// CREATE FUNCTION 
async  function createNote (note) {
    if( note.notes === undefined ){
        console.log('empty------')
      } else {
        await fetch(`${proxy.url}note-create`, {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          }, body: JSON.stringify({
            notes:note.notes
          })
        })
    } 
}

// UPDATE FUNCTION
async function updateNote (id, note) {
    await fetch(`${proxy.url}note-update/${id}`, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
        }, body: JSON.stringify({
            notes:note.notes
        })
    })
}


export const DelteIcon = ({ id }) => {
  const navigation = useNavigation()
  const { theme } = useContext(NoteContext);  
  
  const deleteThisNote = () => {
      deleteNote (id);
      navigation.goBack();
  }
 return (
    <Pressable
      style={styles.save}
      android_ripple={{
        color:theme === 'light' ? lightTheme.rippleColor : darkTheme.rippleColor,
        radius: 17.6
        
      }}
      onPress={deleteThisNote}
    >
      
      <AntIcon 
        name='delete'
        size={24}
        color={ theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor}
      />
    </Pressable>
  )
} 

  
// ADD ICON STYLE
export const AddIcon = ({ note }) => { 
    const navigation = useNavigation();
    const { theme } = useContext(NoteContext);  
    
    const addNote = () => {
      createNote(note)
      console.log('notes: ', note?.notes);
      navigation.goBack();
    }
  
    return (
      <Pressable
        style={styles.save}
        android_ripple={{
          color: theme === 'light' ? lightTheme.rippleColor : darkTheme.rippleColor,
          radius: 17.6, // for Delete
          
        }}
        onPress={addNote}
      >
        <IonIcon 
          name='add-circle-outline'
          size={30}
          color={theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor}
        />
      </Pressable>
    ) 
}
  

// LEFT HEADER STYLE
export const LeftHeader = ({ note, id }) => {
    const navigation = useNavigation();
    const { theme } = useContext(NoteContext);  

    const handleSubmit = () => {
        if(id === undefined){
            if(note.notes === '' || note.notes === undefined) {
                // deleteNote (id)
            } else {
                createNote (note)
            }
        } else if (note.notes === undefined || note.notes === '') {
            deleteNote (id)
        } else if (note.notes !== '' || note.notes !== undefined) {
            updateNote (id, note);
        }

        navigation.goBack();
      }
    
    return (
        <Pressable
        android_ripple={{
            color: theme === 'light' ? lightTheme.rippleColor : darkTheme.rippleColor,
            radius: 20,
        }}
        style={styles.backBtn}
    
        onPress={handleSubmit}
        >
        <Icon 
            name='chevron-thin-left'
            size={24}
            color={theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor}
        />
        </Pressable>
    )
}
  
const styles = StyleSheet.create({
    save:{
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 5,
    }, backBtn:{
      marginLeft: 10,
      padding:8,
      alignItems: 'center',
      justifyContent: 'center',
    }
  })