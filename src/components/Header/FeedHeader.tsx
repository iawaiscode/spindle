import { View } from "react-native";
import { FeedTopBar } from "@/components/Header/FeedTopBar";
import FeedAddPost from "@/components/Header/FeedAddPost";

export const FeedHeader = () => {
  return (
    <View>
      <FeedTopBar />
      <FeedAddPost />
    </View>
  );
};
