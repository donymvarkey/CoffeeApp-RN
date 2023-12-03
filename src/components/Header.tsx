import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {ArrowLeft, Heart} from '../assets';
import {HEIGHT, WIDTH} from '../constants/dimensions';

const Header = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: WIDTH * 0.06,
        marginTop: HEIGHT * 0.02,
      }}>
      <Pressable onPress={() => props.navigation.goBack()}>
        <Image source={ArrowLeft} />
      </Pressable>
      <Text style={{fontSize: 18, fontWeight: '600'}}>
        {props.title && props.title}
      </Text>
      <Image source={Heart} />
    </View>
  );
};

export default Header;
