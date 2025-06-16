import { Text, TouchableOpacity, View } from "react-native";
import { ChatTeardropDots, Heart, Plus } from "phosphor-react-native";

export const FeedTopBar = () => {
  //Top Bar: Logo , Add Post , Favorites , Inbox
  // Add Post Bar

  return (
    <View className={"flex-row justify-between py-4 px-6"}>
      <Text className={"text-white font-bold text-2xl"}>Spindle</Text>
      <View className={"flex-row gap-4"}>
        <TouchableOpacity className={"p-2 bg-gray-800 rounded-md"}>
          <Plus size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className={"p-2 bg-gray-800 rounded-md"}>
          <Heart size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className={"p-2 bg-gray-800 rounded-md"}>
          <ChatTeardropDots size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
