import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { CaretLeft, DotsThreeVertical } from "phosphor-react-native";

const ScreensLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="savedPosts"
        options={{
          headerTitle: "Favorites",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Lato_700Bold",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <CaretLeft size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <DotsThreeVertical size={24} color="white" weight={"bold"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="chat"
        options={{
          headerShown: true,
          title: "Messages",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <CaretLeft size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <DotsThreeVertical size={24} color="white" weight={"bold"} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};
export default ScreensLayout;
