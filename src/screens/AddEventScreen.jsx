import React from 'react'
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function AddEventScreen({navigation,route}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const handleSave = () => {
        const newEvent = {
          id: uuidv4(),
          title,
          description,
          date,
          location,

        navigation.navigate('EventListScreen', { newEvent });
      };
    }
     
  return (

    <View style={styles.container}>
     <TextInput
       label="Title"
       value={title}
       onChangeText={text => setTitle(text)}
       style={styles.input}
     />
     <TextInput
       label="Description"
       value={description}
       onChangeText={text => setDescription(text)}
       style={styles.input}
     />
     <TextInput
       label="Date"
       value={date}
       onChangeText={text => setDate(text)}
       style={styles.input}
     />
     <TextInput
       label="Location"
       value={location}
       onChangeText={text => setLocation(text)}
       style={styles.input}
     />
     <Button mode="contained" onPress={handleSave}>
       Save
     </Button>
   </View>

    
  )
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    input: {
      marginBottom: 16,
    },
   });
   
