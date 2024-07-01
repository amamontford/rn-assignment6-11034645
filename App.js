import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import Cart from './components/Cart';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Hides the header for the Home screen
        />
        <Stack.Screen 
          name="Cart" 
          component={Cart} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
