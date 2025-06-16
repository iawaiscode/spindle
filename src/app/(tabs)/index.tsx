import { Post } from "@/components/post/Post";
import { usePosts } from "@/Hooks/usePosts";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FeedHeader } from "@/components/Header/FeedHeader";

const Feed = () => {
  const { data } = usePosts();

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={FeedHeader}
        data={data}
        renderItem={({ item }) => <Post item={item} />}
      />
    </SafeAreaView>
  );
};

export default Feed;
