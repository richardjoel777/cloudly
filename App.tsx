/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Selection from './src/components/Selection';
import TodayWeather from './src/components/TodayWeather';
import LinearGradient from 'react-native-linear-gradient';
import WeatherTimeline from './src/components/WeatherTimeline';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#6efae6', '#72efee']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        className=" w-full h-full bg-opacity-40 flex">
        <Selection />
        <TodayWeather />
        <WeatherTimeline></WeatherTimeline>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default App;
