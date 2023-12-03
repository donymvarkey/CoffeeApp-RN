/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import {COLORS} from '../constants';

const FilterList = props => {
  return (
    <View>
      <FlatList
        horizontal
        contentContainerStyle={{
          marginHorizontal: WIDTH * 0.01,
          paddingEnd: WIDTH * 0.02,
        }}
        data={props.data}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{width: WIDTH * 0.02}} />}
        renderItem={({item}) => (
          <Pressable
            onPress={() => props.onSelect(item)}
            style={[
              {
                paddingHorizontal: WIDTH * 0.05,
                paddingVertical: HEIGHT * 0.014,
                borderRadius: 12,
                backgroundColor: 'transparent',
              },
              props.selectedType.id === item.id && {
                backgroundColor: COLORS.primary,
              },
            ]}>
            <Text
              style={[
                {fontSize: 16},
                item.id === props.selectedType.id && {
                  color: COLORS.white,
                  fontWeight: '600',
                },
              ]}>
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default FilterList;
