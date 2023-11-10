import { View, Text, StyleSheet, FlatList } from "react-native";


export default function InstructionsList() 
{ 

    const instructions = [
        'Step 1: Open the app',
        'Step 2: Press Start to see your current registered plants',
        'Step 3: Look around your campus and search for those QR codes!',
        'Step 4: Register them using your camera.',
        'Step 5: Have fun!',
      ];

        // Render each item in the list
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
  return (
    <FlatList
      data={instructions} // Data for the list
      renderItem={renderItem} // How to render each item
      keyExtractor={(item, index) => index.toString()} // Key extractor for the list items
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
});
