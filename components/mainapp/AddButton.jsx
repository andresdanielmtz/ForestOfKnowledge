import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";


export default function AddButton() {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={() => console.log('Woah')}>
        <Text style={style.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#62a2e3',
    paddingHorizontal: 20, // You can adjust this value to increase the padding
    paddingVertical: 10, // You can adjust this value to increase the padding
    borderRadius: 5, // Rounds the corners of the button
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});
