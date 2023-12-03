import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  label: String;
  buttonStyle: Object;
  labelStyle: Object;
  onPress(): void;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
      <Text style={props.labelStyle}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
