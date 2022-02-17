import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigationProp} from './RootStack';

type MatinTabParamList = {
  Home: undefined;
  Account: undefined;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MatinTabParamList>
>;

export type MainTabNaviationScreenParams =
  NavigatorScreenParams<MatinTabParamList>;

const Tab = createBottomTabNavigator<MatinTabParamList>();

function HomeScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();
  const onPress = () => {
    navigation.navigate('Detail', {id: 1});
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Detail" onPress={onPress} />
    </View>
  );
}

function AccountScreen() {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
}

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={AccountScreen} name="Account" />
    </Tab.Navigator>
  );
}

export default MainTab;
