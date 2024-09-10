import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventList from './src/screens/EventList';
import AddEventScreen from './src/screens/AddEventScreen';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="event" component={EventList} />
        <Stack.Screen name='addevent' component={AddEventScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  )};
