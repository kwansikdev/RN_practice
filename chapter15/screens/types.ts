import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// MainTab
export type MainTabParamList = {
  Articles: undefined;
};

export type MainTabNavigationScreenParms =
  NavigatorScreenParams<MainTabParamList>;

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;
export type MainTabRouteProp = RouteProp<RootStackParmList, 'MainTab'>;

// RootStack
export type RootStackParmList = {
  MainTab: MainTabNavigationScreenParms;
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParmList>;
