import { ChatTeardropDots, Heart, Share } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

const PostFooter = ({
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
        <Text className="text-gray-400 text-sm">Reply</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-2 p-2">
        <Heart
          size={20}
          color={isLiked ? "#ff0000" : "#6e798c"}
          weight={isLiked ? "fill" : "regular"}
        />
        <Text className="text-gray-400 text-sm">{reactions.likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-2 p-2">
        <Share
          size={20}
          color={isShared ? "#fff" : "#6e798c"}
          weight={isShared ? "fill" : "regular"}
        />
        <Text className="text-gray-400 text-sm">Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostFooter;
