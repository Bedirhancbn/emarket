import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './screens/Home/Main/Main';
import Detail from './screens/Home/Detail/Detail';
import Filter from './screens/Home/Filter/Filter';
import Cart from './screens/Cart/Cart';
import Favorities from './screens/Favorities/Favorities';
import Profile from './screens/Profile/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: true,
          title: '',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#2A59FE'},
        }}
        sty
      />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
}
function CartScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CartStack" component={Cart} />
    </Stack.Navigator>
  );
}

function FavoritiesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritiesStack" component={Favorities} />
    </Stack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileStack" component={Profile} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Favorities" component={FavoritiesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
