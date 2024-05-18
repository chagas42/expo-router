import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Painel",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="tags" color={color} size={size} />;
            }
            return <FontAwesome name="tag" color={color} size={size} />;
          },
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Painel",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="tags" color={color} size={size} />;
            }
            return <FontAwesome name="tag" color={color} size={size} />;
          },
        }}
      />
    </Tabs>
  );
}
