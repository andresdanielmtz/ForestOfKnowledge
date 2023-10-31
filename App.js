import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native"; 

import Home from "./Home";
import MainApp from "./components/mainapp/mainapp";
import Settings from "./components/settings/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = useColorScheme(); 

  return (
    <NavigationContainer theme = {theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
