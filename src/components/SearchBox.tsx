import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {COLORS, STRINGS} from '../constants';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import {Filter, Search} from '../assets';

const SearchBox = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.brown,
        paddingVertical: HEIGHT * 0.01,
        paddingHorizontal: WIDTH * 0.02,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image source={Search} />
      <TextInput
        placeholder={STRINGS.search_coffee}
        placeholderTextColor={COLORS.grey}
        style={{marginLeft: WIDTH * 0.03, flex: 1}}
      />
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: WIDTH * 0.12,
          height: HEIGHT * 0.06,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
        }}>
        <Image source={Filter} />
      </View>
    </View>
  );
};

export default SearchBox;
