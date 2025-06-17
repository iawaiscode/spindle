import { Text, TouchableOpacity, View } from "react-native";
import { ChatTeardropDots, Heart } from "phosphor-react-native";
import { useRouter } from "expo-router";

export const FeedTopBar = () => {
  const router = useRouter();

  return (
    <View className={"flex-row justify-between py-4 px-6"}>
      <Text className={"text-white font-bold text-2xl"}>Spindle</Text>
      <View className={"flex-row gap-4"}>
        <TouchableOpacity
          onPress={() => {
            router.push("/savedPosts");
          }}
          className={"p-2 bg-gray-800 rounded-md"}
        >
          <Heart size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/chat");
          }}
          className={"p-2 bg-gray-800 rounded-md"}
        >
          <ChatTeardropDots size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
