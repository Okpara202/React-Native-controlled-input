import { Tabs } from "expo-router";
import { Text } from "react-native";

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "black",
      }}
    >
      <Tabs.Screen
        name="chrome"
        options={{
          title: "jdkk",
          tabBarLabel: "undl",
          tabBarIcon(props) {
            return <Text>dk</Text>;
          },
        }}
      />
      <Tabs.Screen name="goggle" />
    </Tabs>
  );
}

export default TabsLayout;
