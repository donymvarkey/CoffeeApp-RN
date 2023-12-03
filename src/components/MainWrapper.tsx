import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import {HEIGHT, WIDTH} from '../constants/dimensions';

interface MainWrapprrProps {
  children: JSX.Element;
  barStyle: String;
}

const MainWrapper = (props: MainWrapprrProps) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={props.barStyle ? props.barStyle : 'dark-content'} />
      <View style={styles.sectionContainer}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: WIDTH,
    height: HEIGHT,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default MainWrapper;
