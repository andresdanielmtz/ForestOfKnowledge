import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "../../Style";

export default function MainApp() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.title}> Main App </Text>
    </View>
  );
}
