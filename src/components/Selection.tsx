import {Image, Text, View} from 'react-native';
import location from '../../assets/icons/ico_location.png';
import calendar from '../../assets/icons/ico_calendar.png';
import down from '../../assets/icons/ico_down.png';

function Selection() {
  return (
    <View className="flex flex-row justify-between mt-16 mx-8 my-4 items-center">
      <View className="flex flex-row space-x-2 items-center">
        <Image source={location} className="w-6 h-6"></Image>
        <Text className="font-semibold text-textPrimary font-primary">
          San Francisco
        </Text>
        <Image source={down} className="w-6 h-6"></Image>
      </View>
      <View>
        <Image source={calendar} className="w-6 h-6"></Image>
      </View>
    </View>
  );
}

export default Selection;
