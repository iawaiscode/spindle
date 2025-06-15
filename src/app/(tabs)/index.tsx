import { usePosts } from "@/Hooks/usePosts";
import { Sphere } from "phosphor-react-native";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddPost from "../components/AddPost/AddPost";
import Post from "../components/post/Post";

const Feed = () => {
  const { data } = usePosts();

  const Header = () => (
    <View className="flex-row justify-between mb-5 p-4 border border-gray-700 rounded-xl">
      <View className="mt-4">
        <Sphere size={35} color="white" />
      </View>
      <View className="flex-1">
        <AddPost />
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        data={data}
        renderItem={({ item }) => <Post item={item} />}
      />
    </SafeAreaView>
  );
};

export default Feed;
