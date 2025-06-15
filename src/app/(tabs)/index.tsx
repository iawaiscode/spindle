import { usePosts } from "@/Hooks/usePosts";
import { Sphere } from "phosphor-react-native";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../components/post/Post";

const Feed = () => {
  const { data } = usePosts();

  const Header = () => (
    <View className="flex-row justify-center items-center mb-5">
      <Sphere size={35} color="white" />
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
