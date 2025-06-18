import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export const HistoryComponent = (props: any) => {
  const isTreated = props.treated;
  const isSick = props.disease;
  return (
    <TouchableOpacity className="relative mx-4 mt-7 flex flex-row rounded-lg bg-main p-2">
      <View className=" ml-4 flex flex-col gap-1">
        <Text className="text-secondary">
          <Text className="font-nunito-bold">Ilikaguliwa Tarehe :</Text> {props.date}{' '}
        </Text>
        <Text className="text-secondary">
          <Text className="font-nunito-bold">Muda :</Text> {props.time}
        </Text>
        {isSick === '' ? (
          <Text>Afya ya mmea</Text>
        ) : (
          <View>
            <Text className="text-secondary">
              <Text className="font-nunito-bold">Gonjwa: {props.disease}</Text>
            </Text>
            {!isTreated ? (
              <Text className="text-red-600">
                <Text className="font-nunito-bold">Haujatibiwa</Text>
              </Text>
            ) : (
              <Text className="text-secondary">
                <Text className="font-nunito-bold">Umetibiwa</Text>
              </Text>
            )}
          </View>
        )}
      </View>
      {isSick !== '' && !isTreated ? (
        <Feather
          name="alert-circle"
          size={34}
          color="red"
          className="absolute"
          style={{ top: 0, right: 0 }}
        />
      ) : (
        <MaterialIcons
          name="health-and-safety"
          size={24}
          color="white"
          className="absolute"
          style={{ top: 0, right: 0 }}
        />
      )}
    </TouchableOpacity>
  );
};
