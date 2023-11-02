import { View, Text, StyleSheet } from "react-native";
import InstructionsList from "./ListInstructions";

export default function Instructions() {
  return (
    <View style = {style.container}>
      <Text style={style.title}>Instructions</Text>
      <Text style = {style.subtitle}> Welcome to the app! </Text> 
      <InstructionsList /> 
    </View>
  );
}

const style = StyleSheet.create({
  container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
  
    title: { 
        fontSize: 24,
        fontWeight: 'bold',
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
    }


});