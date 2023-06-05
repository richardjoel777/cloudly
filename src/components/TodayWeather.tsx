import {Image, Text, View} from 'react-native';
import cloudy from '../../assets/icons/ico_cloudy.png';
import wind from '../../assets/icons/ico_wind.png';
import drop from '../../assets/icons/ico_drop.png';

function TodayWeather() {
  return (
    <View className="flex items-center w-full mt-4 space-y-2">
      <Image source={cloudy} className="w-40 h-40"></Image>
      <Text className="font-semibold text-textPrimary font-primary">
        Cloudy
      </Text>
      <Text className="font-extrabold text-7xl text-textPrimary font-primary">
        {' '}
        28 &#176;
      </Text>
      <View className="flex flex-row space-x-4">
        <View className="flex flex-row space-x-1 items-center">
          <Image source={wind} className="w-4 h-4"></Image>
          <Text className="text-textSecondary font-semibold font-primary">
            8 km/h
          </Text>
        </View>
        <View className="flex flex-row space-x-1 items-center">
          <Image source={drop} className="w-4 h-4"></Image>
          <Text className="text-textSecondary font-semibold font-primary">
            47 %
          </Text>
        </View>
      </View>
    </View>
  );
}

export default TodayWeather;
