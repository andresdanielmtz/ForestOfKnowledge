import { Text, View, Button, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "../../Style";
import DataElement from "./data_element";
import JSONData from "../../local.json";


export default function MainApp() {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={style.container}>
        <DataElement />

    </View>
    </ScrollView>
  );
}
