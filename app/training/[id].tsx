import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

const TrainDetails = () => {
  const {id} = useLocalSearchParams<{id:string}>()
    return (
        <View>
            <Text>Train Details{id}</Text>
        </View>
    )
}

export default TrainDetails;