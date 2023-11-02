import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "../../Style";
import DataElement from "./data_element";
import AddButton from "./AddButton";

export default function MainApp() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <View style={style.container}>
          <DataElement />
        </View>
      </ScrollView>
      <View style = {mainStyle.container}>
        <AddButton />
      </View>
    </View>
  );
}

const mainStyle = StyleSheet.create({
  container: {
    marginTop: 10, 
    width: "100%", 
    height: 75,
  
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: "italic",
    paddingBottom: 10,
    marginVertical: 10,
  },
});
