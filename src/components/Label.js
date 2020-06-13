import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors.constants';

const Label = (props) => {
  return (
    <Text style={{...styles.Label, ...props.style}}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  Label: {
    color: Colors.BRUSH,
  },
});

export default Label;
