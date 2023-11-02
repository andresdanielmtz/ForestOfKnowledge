import { View, Button, Text, StyleSheet } from "react-native";
import JSONData from "../../local.json";

export default function DataElement() {
  const dbArray = JSONData.db;

  return (
    <View>
      {dbArray.map((item, index) => (
        <View style = {dataStyle.container} key={index}>

            {/* We should put img here */}

            
            <View> 
          <Text> {item.name} </Text>
          <Text> {item.type} </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const dataStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    
        width: 400,
        borderRadius: 20,
        margin: 10,
        height: 100,
        backgroundColor: "#00AbAf",
    }
    });
    