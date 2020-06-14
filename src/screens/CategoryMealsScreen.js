import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import Label from '../components/Label';
import MealItem from '../components/MealItem';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealScreen = (props) => {
  // console.log('log: ', props.route.params.categoryTitle);
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
      />
    );
  };

  const catId = props.route.params.categoryId;
  console.log('mealId: ', catId);
  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
  console.log('meals: ', meals);

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  listContainer: {
    width: '100%',
  },
});

export default CategoryMealScreen;
