/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import {COLORS} from '../constants';
import {Plus} from '../assets';

const CoffeeList = props => {
  return (
    <View
      style={{
        height: HEIGHT * 0.4,
        paddingHorizontal: WIDTH * 0.02,
        paddingBottom: HEIGHT * 0.02,
      }}>
      <FlatList
        data={props.data}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{height: HEIGHT * 0.02}} />}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable
            onPress={() => props.navigate(item)}
            style={{
              borderRadius: 16,
              width: WIDTH * 0.43,
              // height: HEIGHT * 0.4,
              backgroundColor: COLORS.white,
            }}>
            <View style={{padding: 8}}>
              <Image
                resizeMode="cover"
                style={{width: '100%', height: 150, borderRadius: 8}}
                source={{uri: item?.image}}
              />
              <View style={{marginTop: HEIGHT * 0.02}}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  {item?.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    marginTop: HEIGHT * 0.003,
                    fontWeight: 'normal',
                    color: COLORS.grey2,
                  }}>
                  {item.type}
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: COLORS.price,
                  }}>
                  {item?.price}
                </Text>
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    marginTop: HEIGHT * 0.01,
                    width: WIDTH * 0.1,
                    height: HEIGHT * 0.05,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 12,
                  }}>
                  <Image style={{width: 20, height: 20}} source={Plus} />
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CoffeeList;
