import { Post } from "@/components/post/Post";
import { usePosts } from "@/Hooks/usePosts";
import { FlatList } from "react-native";
import { FeedHeader } from "@/components/FeedHeader/FeedHeader";

const Feed = () => {
  const { data } = usePosts();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={FeedHeader}
      data={data}
      renderItem={({ item }) => <Post item={item} />}
    />
  );
};

export default Feed;
