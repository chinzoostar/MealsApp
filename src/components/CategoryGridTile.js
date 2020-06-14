import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Label from '../components/Label';

const CategoryGridTile = (props) => {
  //   console.log('props: ', props.categoryTitle);
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        <Label style={styles.title}>{props.categoryTitle}</Label>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 22,
  },
});

export default CategoryGridTile;
