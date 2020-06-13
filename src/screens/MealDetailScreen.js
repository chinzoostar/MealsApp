import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Label from '../components/Label';

const MealDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Label>Meal Details Screen!</Label>
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

export default MealDetailsScreen;
