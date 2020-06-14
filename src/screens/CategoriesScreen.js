import React from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Label from '../components/Label';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        categoryTitle={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('CategoryMealsScreen', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
            name: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={1}
    />
    // <View style={styles.screen}>
    //   <Text>CategoriesScreen!</Text>
    //   <Button
    //     title="Go to CategoryMealScreen"
    //     onPress={() => {
    //       props.navigation.navigate('CategoryMealsScreen', {
    //         name: 'Mongolian',
    //         title: 'Mongolian',
    //       });
    //     }}
    //   />
    // </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
