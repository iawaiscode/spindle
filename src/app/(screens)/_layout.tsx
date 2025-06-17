import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import { Avatar } from "../../components/Avatar";

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
          headerStyle: {
            backgroundColor: "#000",
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <CaretLeft size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => <Avatar image={"https://picsum.photos/200/300"} />,
        }}
      />
    </Stack>
  );
};
export default ScreensLayout;
