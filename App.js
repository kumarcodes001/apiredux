import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfilePage } from "./components/Profile";
import { DataView } from "./components/DataView";
import { store } from './redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (


    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile"
            component={ProfilePage}
            options={{
              headerStyle: { backgroundColor: "#171717" }, 
              headerTintColor: '#EDEDED', 
              headerTitle: 'Dashboard'}
              } 
            />
          <Stack.Screen
            name="ApiData"
            component={DataView}
            options={{
              headerStyle: { backgroundColor: "#171717" }, 
              headerTintColor: '#EDEDED', 
              headerTitle: 'Data' }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
}

