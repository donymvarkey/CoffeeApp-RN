import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  CoffeeList,
  FilterList,
  MainWrapper,
  Promotion,
  SearchBox,
} from '../components';
import {
  COLORS,
  STRINGS,
  coffeeTypes,
  coffeeData,
  SCREEN_NAMES,
} from '../constants';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import {ArrowDown, Profile} from '../assets';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCoffeeType, setSelectedCoffeeType] = useState({});

  const handleCoffeeTypeSelect = (type: Object) => {
    setSelectedCoffeeType(type);
  };

  const handleNaviagteToDetails = item => {
    navigation.navigate(SCREEN_NAMES.DetasilsScreen, {data: item});
  };

  useEffect(() => {
    handleCoffeeTypeSelect(coffeeTypes[0]);
  }, []);
  return (
    <MainWrapper barStyle={'light-content'}>
      <View
        style={{
          backgroundColor: COLORS.secondary,
          width: WIDTH,
          height: HEIGHT * 0.35,
          paddingVertical: HEIGHT * 0.07,
          paddingHorizontal: WIDTH * 0.04,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column', rowGap: 2}}>
            <Text style={{color: COLORS.grey2, fontSize: 14}}>
              {STRINGS.location}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.offWhite,
                  fontWeight: '500',
                }}>
                Trivandrum, Kerala
              </Text>
              <Image
                style={{width: 18, height: 18, marginLeft: WIDTH * 0.02}}
                source={ArrowDown}
              />
            </View>
          </View>
          <Image
            style={{width: 40, height: 40, borderRadius: 6}}
            source={Profile}
          />
        </View>
        <View style={{paddingVertical: HEIGHT * 0.03}}>
          <SearchBox />
          <View>
            <Promotion />
          </View>
        </View>
        <View>
          <FilterList
            data={coffeeTypes}
            onSelect={handleCoffeeTypeSelect}
            selectedType={selectedCoffeeType}
          />
        </View>
        <View style={{paddingTop: HEIGHT * 0.03}}>
          <CoffeeList
            data={coffeeData}
            navigation={navigation}
            navigate={handleNaviagteToDetails}
          />
        </View>
      </View>
    </MainWrapper>
  );
};

export default HomeScreen;
