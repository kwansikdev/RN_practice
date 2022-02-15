import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return <Text>Home</Text>;
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       tabBarActiveTintColor: '#fb8c00',
    //       tabBarShowLabel: false,
    //     }}>
    //     <Tab.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         title: '홈',
    //         tabBarIcon: ({color, size}) => (
    //           <Icon name="home" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Search"
    //       component={SearchScreen}
    //       options={{
    //         title: '검색',
    //         tabBarIcon: ({color, size}) => (
    //           <Icon name="search" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Notification"
    //       component={NotificationScreen}
    //       options={{
    //         title: '알림',
    //         tabBarIcon: ({color, size}) => (
    //           <Icon name="notifications" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Message"
    //       component={MessageScreen}
    //       options={{
    //         title: '메시지',
    //         tabBarIcon: ({color, size}) => (
    //           <Icon name="message" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
