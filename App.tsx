import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Account, Groups, LogIn, Messages, Posts, SignUp, Upload } from './pages';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }} >
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Groups" component={Groups} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Upload" component={Upload} />

        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

