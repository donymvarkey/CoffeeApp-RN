/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, Animated, StatusBar, Image} from 'react-native';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import {SplashImage} from '../assets';
import {COLORS, SCREEN_NAMES, STRINGS} from '../constants';
import {Button} from '../components';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const [bounceValue, setBounceValue] = useState(new Animated.Value(1000));
  const [isHidden, setIsHidden] = useState(true);
  const navigation = useNavigation();

  const _toggleSubview = () => {
    var toValue = 500;

    if (isHidden) {
      toValue = 0;
    }

    Animated.spring(bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();

    setIsHidden(!isHidden);
  };

  const navigateToHomeScreen = () => {
    navigation.navigate(SCREEN_NAMES.HomeScreen);
  };

  useEffect(() => {
    setTimeout(() => {
      _toggleSubview();
    }, 1500);
  }, []);
  return (
    <View style={{width: WIDTH, height: HEIGHT, backgroundColor: COLORS.black}}>
      <StatusBar barStyle={'light-content'} />
      <Image
        style={{width: WIDTH, height: HEIGHT * 0.6}}
        source={SplashImage}
      />
      <Animated.View
        style={{
          width: WIDTH,
          height: HEIGHT * 0.45,
          position: 'absolute',
          bottom: 0,
          paddingVertical: HEIGHT * 0.03,
          alignItems: 'center',
          justifyContent: 'flex-start',
          transform: [{translateY: bounceValue}],
        }}>
        <Text
          style={{
            color: COLORS.white,
            padding: WIDTH * 0.04,
            fontSize: 50,
            textAlign: 'center',
            lineHeight: HEIGHT * 0.055,
            fontWeight: '600',
          }}>
          {STRINGS.title}
        </Text>
        <Text
          style={{
            color: COLORS.grey,
            width: WIDTH * 0.65,
            fontSize: 14,
            textAlign: 'center',
          }}>
          {STRINGS.sub_title}
        </Text>
        <View
          style={{
            width: WIDTH,
            paddingHorizontal: WIDTH * 0.07,
            paddingTop: HEIGHT * 0.05,
          }}>
          <Button
            label={STRINGS.get_started}
            onPress={navigateToHomeScreen}
            buttonStyle={{
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: HEIGHT * 0.025,
              borderRadius: 16,
            }}
            labelStyle={{fontSize: 18, fontWeight: '500', color: COLORS.white}}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
