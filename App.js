import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens';
import ProfileScreen from './src/screens/Profile';
import {ThemeProvider} from 'styled-components';

const Stack = createStackNavigator();

const theme = {
  colors: {
    dark: '#22162b',
    light: '#c6d8ff',
    button: '#53687e',
    textLight: '#fff9ec',
    textDark: '#223127',
    input: '#724e91',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{cardStyle: {backgroundColor: theme.colors.light}}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTintColor: theme.colors.light,
              headerStyle: {backgroundColor: theme.colors.dark},
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerTintColor: theme.colors.light,
              headerStyle: {backgroundColor: theme.colors.dark},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
