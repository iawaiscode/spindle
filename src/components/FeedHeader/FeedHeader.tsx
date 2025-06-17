import { FeedTopBar } from "@/components/FeedHeader/FeedTopBar";
import FeedAddPost from "@/components/FeedHeader/FeedAddPost";
import { SafeAreaView } from "react-native-safe-area-context";

export const FeedHeader = () => {
  return (
    <SafeAreaView edges={["top"]}>
      <FeedTopBar />
      <FeedAddPost />
    </SafeAreaView>
  );
};
