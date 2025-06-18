import { Text, TouchableOpacity, View } from "react-native";
import { BookmarkSimple, ChatTeardropDots } from "phosphor-react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@react-navigation/native";

export const FeedTopBar = () => {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <View className={"flex-row justify-between py-4 px-6"}>
      <Text className={"text-white font-bold text-2xl"}>Spindle</Text>
      <View className={"flex-row gap-4"}>
        <TouchableOpacity
          onPress={() => {
            router.push("/savedPosts");
          }}
          className={"p-2 bg-card rounded-full"}
        >
          <BookmarkSimple size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/chat");
          }}
          className={"p-2 bg-card rounded-full"}
        >
          <ChatTeardropDots size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
