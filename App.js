import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Colors} from '_constants/Colors.constants';
import {Colors} from './src/constants/Colors.constants';
import MealsNavigator from './src/navigations/MealsNavigator';

const App = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.PAINT,
  },
});

export default App;
