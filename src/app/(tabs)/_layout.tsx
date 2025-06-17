import { Tabs } from "expo-router";
import {
  Handbag,
  House,
  MagnifyingGlass,
  User,
  Video,
} from "phosphor-react-native";
import { Text, View } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <House
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="spins"
        options={{
          title: "Spins",
          tabBarIcon: ({ color, size, focused }) => (
            <Video
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size, focused }) => (
            <MagnifyingGlass
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Store",
          tabBarIcon: ({ color, size, focused }) => (
            <View className="relative">
              <View className="absolute -top-2 -right-2 bg-green-500 rounded-full w-4 h-4 flex items-center justify-center">
                <Text className="text-white text-xs font-bold">1</Text>
              </View>
              <Handbag
                color={color}
                size={size}
                weight={focused ? "fill" : "regular"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <User
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
