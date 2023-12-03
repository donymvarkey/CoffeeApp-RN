import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DeliverScreen,
  DetailsScreen,
  HomeScreen,
  OrderScreen,
  SplashScreen,
} from './screens';
import {SCREEN_NAMES} from './constants';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SCREEN_NAMES.SplashScreen}>
        <Stack.Screen
          name={SCREEN_NAMES.SplashScreen}
          component={SplashScreen}
        />
        <Stack.Screen name={SCREEN_NAMES.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={SCREEN_NAMES.DetasilsScreen}
          component={DetailsScreen}
        />
        <Stack.Screen name={SCREEN_NAMES.OrderScreen} component={OrderScreen} />
        <Stack.Screen
          name={SCREEN_NAMES.DeliverScreen}
          component={DeliverScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
