import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./Style.js";

export default function Home() {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    startMenu: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={style.container}>
      <View >
        <View
          id="test"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <Text style={style.title}> Forest of Knowledge </Text>
          <Text style={style.subtitle}> Let's learn about where we live. </Text>
          <View style={styles.startMenu}>
            <Button
              title="Start"
              color="#519872"
              onPress={() => navigation.navigate("MainApp")}
            />
            <Button
              title="Settings"
              color="#519872"
              onPress={() => navigation.navigate("Settings")}
            />
            <Button
              title="Instructions"
              color="#519872"
              onPress={() => navigation.navigate("Instructions")}
            />
          </View>
        </View>
      </View>

      <View style={homeStyle.container}>
        <View style={homeStyle.settingsLocation}>
          <Button
            title="Based"
            color="#00BAD4"
            onPress={() => console.log("Testing Button, please remove me if you see me!")}
          />
        </View>
      </View>
    </View>
  );
}

const homeStyle = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    padding: 20,
  },

  settingsLocation: {
    alignSelf: "flex-end", // Aligns itself to the right of the flex container
    marginBottom: 100, // Moves the button up from the bottom
    marginRight: 20, // Moves the button in from the right
  },

   
});
