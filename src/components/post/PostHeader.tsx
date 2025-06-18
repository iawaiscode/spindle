import { DotsThree } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export const PostHeader = ({
  username,
  timestamp,
}: {
  username: string;
  timestamp: string;
}) => {
  return (
    <View className="flex-row justify-between items-center mb-2">
      <View className="flex-row items-center gap-2">
        <Text className="text-white/90 font-bold text-base">{username}</Text>
        <Text className="text-primary text-sm font-bold">
          {
            // Placeholder for timestamp
            timestamp
          }
        </Text>
      </View>
      <TouchableOpacity className="p-2 rounded-full bg-border">
        <DotsThree size={20} color="#fff" weight={"bold"} />
      </TouchableOpacity>
    </View>
  );
};
