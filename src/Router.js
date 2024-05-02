import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductProvider} from './context/ProductContext';

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
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: true,
          title: 'E-market',
          headerStyle: {backgroundColor: '#2A59FE'},
          headerTitleStyle: {fontWeight: '900', fontSize: 28},
          headerTintColor: '#fff',
        }}
      />
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
      <Stack.Screen
        name="CartStack"
        component={Cart}
        options={{
          headerShown: true,
          title: 'E-market',
          headerStyle: {backgroundColor: '#2A59FE'},
          headerTitleStyle: {fontWeight: '900', fontSize: 28},
          headerTintColor: '#fff',
        }}
      />
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
      <ProductProvider>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: '',
              tabBarIcon: () => {
                return (
                  <Image
                    style={{
                      width: 35,
                      height: 35,
                      marginTop: 15,
                      marginRight: 15,
                    }}
                    source={require('./assets/images/home_icon.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              title: '',
              tabBarBadge: 3,
              tabBarIcon: () => {
                return (
                  <Image
                    style={{
                      width: 35,
                      height: 35,
                      marginTop: 15,
                      marginRight: 15,
                    }}
                    source={require('./assets/images/cart_icon.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Favorities"
            component={FavoritiesScreen}
            options={{
              title: '',
              tabBarIcon: () => {
                return (
                  <Image
                    style={{
                      width: 35,
                      height: 35,
                      marginTop: 15,
                      marginRight: 15,
                    }}
                    source={require('./assets/images/favorites_icon.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: '',
              tabBarIcon: () => {
                return (
                  <Image
                    style={{
                      width: 35,
                      height: 35,
                      marginTop: 15,
                      marginRight: 15,
                    }}
                    source={require('./assets/images/profile_icon.png')}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </ProductProvider>
    </NavigationContainer>
  );
}

export default App;
