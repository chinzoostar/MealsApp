import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors.constants';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

const Stack = createStackNavigator();

const MealsNavigatorTheme = {
  dark: false,
  colors: {
    primary: Colors.ACCESS_PAINT,
    background: Colors.PAINT_DARK,
    card: Colors.PAINT,
    text: Colors.BRUSH,
    border: Colors.PAINT_HIGH,
  },
};

const MealsNavigator = (props) => {
  return (
    <NavigationContainer theme={MealsNavigatorTheme}>
      <Stack.Navigator initialRouteName="CategoriesScreen">
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{title: 'CategoriesScreen'}}
        />
        <Stack.Screen
          name="CategoryMealsScreen"
          component={CategoryMealsScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
