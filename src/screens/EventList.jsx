import React, { useState } from 'react'
import { View, FlatList, Button, Text } from 'react-native';
import { eventsData } from './Events';
import { List, Button } from 'react-native-paper';


export default function EventList({navigation}) {
const [state, setState] =useState(eventsData)


const handleDelete = (id) => {
  setEvents(state.filter(state => state.id !== id));
};

  return (
    <View style={styles.container}>
    <FlatList
      data={state}
      renderItem={({ item }) => (
        <List.Item
          title={item.title}
          description={`${item.date} - ${item.location}`}
          right={props => (
            <Button {...props} onPress={() => handleDelete(item.id)}>
              Delete
            </Button>
          )}
          onPress={() => navigation.navigate('EventDetails', { event: item })}
        />
      )}
      keyExtractor={item => item.id}
    />
    <Button mode="contained" onPress={() => navigation.navigate('AddEventScreen')}>
      Add Event
    </Button>
  </View>

  )
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
   });
   
}

