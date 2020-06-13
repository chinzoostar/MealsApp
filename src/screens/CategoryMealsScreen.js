import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Label from '../components/Label';

const CategoryMealScreen = (props) => {
  console.log('log: ', props.route.params.categoryTitle);
  return (
    <View style={styles.screen}>
      <Label>CategoryMealScreen!</Label>
      <Label>{props.route.params.categoryTitle}!</Label>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
