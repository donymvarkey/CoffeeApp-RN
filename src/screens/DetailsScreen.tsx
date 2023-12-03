/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, Header, MainWrapper} from '../components';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import {COLORS, STRINGS} from '../constants';
import {Bean, Milk, Star} from '../assets';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = props => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(props?.route?.params?.data);
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <MainWrapper>
      <View style={{paddingTop: HEIGHT * 0.05}}>
        <Header title={STRINGS.details} navigation={navigation} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: WIDTH * 0.08,
            paddingBottom: WIDTH * 0.04,
          }}>
          <View style={{marginTop: HEIGHT * 0.02}}>
            <Image
              style={{
                width: '100%',
                height: 300,
                borderRadius: 16,
                objectFit: 'cover',
              }}
              source={{uri: selectedItem?.image}}
            />
          </View>
          <View style={{paddingVertical: HEIGHT * 0.01}}>
            <Text style={{fontSize: 20}}>{selectedItem?.name}</Text>
            <Text style={{fontSize: 12, color: COLORS.grey}}>
              {selectedItem?.type}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 6,
              }}>
              <Image style={{width: 24, height: 24}} source={Star} />
              <Text style={{fontSize: 16}}>
                {selectedItem?.rating}({selectedItem?.total_rated})
              </Text>
            </View>
            <View style={{flexDirection: 'row', columnGap: 5}}>
              <View
                style={{
                  backgroundColor: COLORS.grey3,
                  padding: 10,
                  borderRadius: 14,
                }}>
                <Image style={{width: 30, height: 30}} source={Bean} />
              </View>
              <View
                style={{
                  backgroundColor: COLORS.grey3,
                  padding: 10,
                  borderRadius: 14,
                }}>
                <Image style={{width: 30, height: 30}} source={Milk} />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              marginTop: HEIGHT * 0.02,
              borderBottomColor: COLORS.offWhite,
            }}
          />
          <View style={{marginTop: HEIGHT * 0.01}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {STRINGS.description}
            </Text>
            <Text
              numberOfLines={3}
              style={{
                fontSize: 14,
                fontWeight: '300',
                marginTop: HEIGHT * 0.01,
              }}>
              {selectedItem?.description}
            </Text>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'right',
                fontWeight: 'bold',
                marginTop: HEIGHT * 0.001,
                color: COLORS.primary,
              }}>
              {STRINGS.read_more}
            </Text>
          </View>
          <View style={{marginTop: HEIGHT * 0.02}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {STRINGS.size}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: HEIGHT * 0.01,
              }}>
              {selectedItem?.size?.map((s: string, index: number) => (
                <Pressable
                  onPress={() => setSelectedSize(s)}
                  key={index}
                  style={[
                    {
                      paddingHorizontal: WIDTH * 0.03,
                      paddingVertical: HEIGHT * 0.019,
                      width: WIDTH * 0.26,
                      borderWidth: 1,
                      borderColor: COLORS.grey2,
                      borderRadius: 14,
                      alignItems: 'center',
                    },
                    selectedSize === s && {
                      borderColor: COLORS.primary,
                      backgroundColor: `${COLORS.primary}20`,
                    },
                  ]}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>{s}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: WIDTH * 0.08,
          columnGap: 6,
          backgroundColor: COLORS.white3,
          paddingBottom: HEIGHT * 0.04,
          paddingTop: HEIGHT * 0.03,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        }}>
        <View style={{width: WIDTH * 0.2}}>
          <Text style={{fontSize: 14, color: COLORS.grey}}>
            {STRINGS.price}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: COLORS.primary,
            }}>
            {selectedItem?.price}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Button
            label={STRINGS.order}
            // onPress={navigateToHomeScreen}
            buttonStyle={{
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: HEIGHT * 0.025,
              borderRadius: 16,
            }}
            labelStyle={{
              fontSize: 18,
              fontWeight: '500',
              color: COLORS.white,
            }}
          />
        </View>
      </View>
    </MainWrapper>
  );
};

export default DetailsScreen;
