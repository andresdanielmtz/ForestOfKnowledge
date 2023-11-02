import { View, Text, StyleSheet, FlatList } from "react-native";


export default function InstructionsList() 
{ 

    const instructions = [
        'Step 1: Open the app',
        'Step 2: Log in with your credentials',
        'Step 3: Navigate to the dashboard',
        'Step 4: Enjoy the features of the app',
        'Step 5: Log out when done'
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