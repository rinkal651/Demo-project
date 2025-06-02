/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext } from 'react';
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product from './component/page/product';
import Cart from './component/page/cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductWarpper from './component/page/ProductWrapper';
import User from './component/page/User';


export type RootStackParamList = {
  Cart: { name?: string };
  User: { userId?: string };
};


export type loggedStatus = {
  isLoggedIn: boolean
}

const Stack = createNativeStackNavigator()
export const AuthContext = createContext<loggedStatus>({ isLoggedIn: false });

function App(): React.JSX.Element {
  return (
    <AuthContext.Provider value={{ isLoggedIn: true }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="productPage" component={ProductWarpper} />
          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>)
}

export default App;
