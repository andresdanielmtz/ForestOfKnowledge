import { useState } from "react";
import { View, Text, Button, Switch } from "react-native";
import { style } from "../../Style";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true); // should it be dark mode by default...? 

  return (
    <View style={style.container}>
      <Text style={style.title}>Settings</Text>
      <View style={settingsStyle.flexRowDetails}>
        <Text style = {settingsStyle.settingText}> Dark Mode </Text> 
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}

const settingsStyle = {
  flexRowDetails: {

    padding: 20,
    flexDirection: "column", // can change to row
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  settingText : {
    fontWeight: "bold", 
    color: "#fff"
  }
};
