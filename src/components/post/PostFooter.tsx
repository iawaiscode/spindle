import { ChatTeardropDots, Heart, Share } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export const PostFooter = ({
  isReplied,
  isLiked,
  isShared,
  reactions,
}: {
  isReplied: boolean;
  isLiked: boolean;
  isShared: boolean;
  reactions: { likes: number; dislikes: number };
}) => {
  return (
    <View className="flex-row justify-between items-center">
      <TouchableOpacity className="flex-row items-center gap-2 p-2">
        <ChatTeardropDots
          size={20}
          color={isReplied ? "#fff" : "#6e798c"}
          weight={isReplied ? "fill" : "regular"}
        />
        <Text className="text-primary text-sm font-bold">Reply</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-2 p-2">
        <Heart
          size={20}
          color={isLiked ? "#e30909" : "#6e798c"}
          weight={isLiked ? "fill" : "regular"}
        />
        <Text className="text-primary text-sm font-bold">
          {reactions.likes}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-2 p-2">
        <Share
          size={20}
          color={isShared ? "#fff" : "#6e798c"}
          weight={isShared ? "fill" : "regular"}
        />
        <Text className="text-primary text-sm font-bold">Share</Text>
      </TouchableOpacity>
    </View>
  );
};
