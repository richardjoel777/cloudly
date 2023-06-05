import {
  FlatList,
  Image,
  ListRenderItem,
  ListRenderItemInfo,
  Text,
  View,
} from 'react-native';
import clouds from '../../assets/icons/ico_clouds.png';

interface IData {
  time: string;
  temp: number;
}

const data: IData[] = [
  {
    time: '9:00 AM',
    temp: 28,
  },
  {
    time: '10:00 AM',
    temp: 27,
  },
  {
    time: '11:00 AM',
    temp: 30,
  },
  {
    time: '12:00 AM',
    temp: 31,
  },
  {
    time: '1:00 AM',
    temp: 31,
  },
];

const weatherItem = (e: ListRenderItemInfo<IData>) => {
  return (
    <View className="flex w-30 py-3 px-4 items-center rounded-sm bg-bgBox mx-4 space-y-4">
      <Text className="text-textPrimary font-semibold">{e.item.time}</Text>
      <Image source={clouds} className="w-20 h-20"></Image>
      <Text className="text-textPrimary text-lg font-bold">
        {' '}
        {e.item.temp} &#176;
      </Text>
    </View>
  );
};

function WeatherTimeline() {
  return (
    <View className="flex w-full px-8 my-8 space-y-4">
      <View className="flex justify-evenly items-center flex-row">
        <Text className="text-textPrimary font-semibold">Today, 18 Sep</Text>
        <Text className="text-textPrimary font-semibold">Mon, 19 Sep</Text>
        <Text className="text-textPrimary font-semibold">Tue, 20 Sep</Text>
      </View>
      <FlatList
        data={data}
        renderItem={weatherItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}></FlatList>
    </View>
  );
}

export default WeatherTimeline;
