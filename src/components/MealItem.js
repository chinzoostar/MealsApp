import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Label from '../components/Label';
import {Colors} from '../constants/Colors.constants';

const MealItem = (props) => {
  console.log('uri:', props.image);
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity>
        <View>
          <View style={{...styles.row, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <View>
                <Label>{props.title}</Label>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.row, ...styles.mealDetail}}>
            <Label>{props.duration}</Label>
            <Label>{props.duration}</Label>
            <Label>{props.duration}</Label>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.PAINT,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    height: '15%',
    justifyContent: 'space-between',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {},
});

export default MealItem;
