import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

// IMPORT YOUR COMPONENETS HERE
import { darkTheme, lightTheme, color } from '../utlis/colors'
import NoteContext from '../context'



const ListName = ({ note, id, date }) => {
  const navigation = useNavigation() 
  const { theme } = useContext(NoteContext);  
  
  console.log('coor: ', theme)
  
  const getDate = () => {
    let currentDate = new Date(date).toDateString()
    return currentDate;
  }
  
 // GET TITLE FOR NOTE
  function getTitle(note) {
    let title = note.split('\n')[0];
    if(title.length > 15){
       return title.slice(0, 20);
    } 

    return title;
  }

// GET DESCRIPTION FROM NOTE
  function getDescription(note) {
    let title = getTitle(note);
    let body =  note.replace('\n', '');
    let desc = body.replace(title, '')

    if(desc.length > 15) {
      return desc.slice(0, 30) + '..';
    }

    return desc;
  }

  const styles = StyleSheet.create({
    container:{
     },
    pressable:{
      height: 80,
      padding: 7,
    },
    title:{
      color:  theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor,
      fontWeight: 'bold',
      fontSize: 18,
    },
    description:{
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    },
    desc:{
      color:  theme === 'light' ? lightTheme.dimFontColor : darkTheme.dimFontColor,
      flex: 1,
      alignItems: 'center',
      // paddingLeft: 7,
    },
    date:{
      color:  theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor,
      fontSize: 17,
    }
  })

  return (
    <Pressable 
      style={styles.pressable}
      android_ripple={{
        color:  theme === 'light' ? lightTheme.rippleColor : darkTheme.rippleColor,
      }}
      onPress={() => navigation.navigate('Note', { id })}
      >
      <View style={styles.container}>
        <Text style={styles.title}>{getTitle(note)}</Text>
      </View>

      <View style={styles.description}>
          <Text style={styles.date}> {getDate()} </Text>
          <Text style={styles.desc}> {getDescription(note)} </Text>
      </View>
    </Pressable>
  )

  
}

export default ListName

