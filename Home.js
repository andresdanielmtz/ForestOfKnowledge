import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { style } from "./Style.js";

export default function Home() {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    startMenu: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.card,
    },
  });

  return (
    <View style={style.container}>
      <View
        id="test"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.card,
        }}
      >
        <Text style={style.title}> Forest of Knowledge </Text>
        <Text style={style.subtitle}> Let's learn about where we live. </Text>
        <View style={styles.startMenu}>
          <Button title="Start" onPress={() => navigation.navigate("MainApp")} />
          <Button
            title="Settings"
            onPress={() => navigation.navigate("Settings")}
          />
          <Button
            title="Instructions"
            onPress={() => navigation.navigate("Instructions")}
          />
        </View>
      </View>
    </View>
  );
}
