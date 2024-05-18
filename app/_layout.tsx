import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerBackTitleVisible: false,
          title: "Home",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerBackTitleVisible: false,
          title: "Profile",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="user/[id]"
        options={{
          headerBackTitleVisible: false,
          title: "User",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
          headerTitleAlign: "left",
        }}
      />
    </Stack>
  );
}
