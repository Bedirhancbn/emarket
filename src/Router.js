import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductContext, ProductProvider} from './context/ProductContext';
import {useContext} from 'react';

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
      <Stack.Group>
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
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Group>
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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="FavoritiesStack"
        component={Favorities}
        options={{
          headerShown: true,
          title: 'Favorities',
          headerStyle: {backgroundColor: '#2A59FE'},
          headerTitleStyle: {fontWeight: '900', fontSize: 28},
          headerTintColor: '#fff',
        }}
      />
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
    <ProductProvider>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </ProductProvider>
  );
}

function MainApp() {
  const {cartData} = useContext(ProductContext);
  let sum = 0;
  cartData.forEach(element => {
    sum += element.quantity;
  });

  return (
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
          tabBarBadge: sum,
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
  );
}

export default App;
