/* eslint-disable react-native/no-inline-styles */
import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Promo} from '../assets';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import {COLORS, STRINGS} from '../constants';

const Promotion = () => {
  return (
    <View
      style={{
        marginTop: HEIGHT * 0.04,
        height: HEIGHT * 0.2,
        borderRadius: 16,
      }}>
      <Image
        resizeMode="stretch"
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 16,
          objectFit: 'cover',
        }}
        source={Promo}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: COLORS.red,
          top: HEIGHT * 0.02,
          left: WIDTH * 0.1,
          borderRadius: 8,
          paddingHorizontal: WIDTH * 0.035,
          paddingVertical: HEIGHT * 0.007,
        }}>
        <Text style={{color: COLORS.white, fontSize: 14, fontWeight: '600'}}>
          {STRINGS.promo}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: HEIGHT * 0.08,
          left: WIDTH * 0.1,
        }}>
        <Text
          style={{
            color: COLORS.white,
            width: WIDTH * 0.7,
            textAlign: 'left',
            fontSize: 38,
            fontWeight: 'bold',
          }}>
          {STRINGS.promo_text}
        </Text>
      </View>
    </View>
  );
};

export default Promotion;
