import { useUsers } from "@/Hooks/useUsers";
import { PostProps } from "@/types";
import { View } from "react-native";
import { Avatar } from "../Avatar";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

export const Post = ({ item: post }: { item: PostProps }) => {
  const { body, reactions, userId } = post;
  const { data: user } = useUsers(userId);
  const isReplied = false;
  const isLiked = false;
  const isShared = false;

  return (
    <View className={"p-2"}>
      <View className="bg-card p-2 rounded-lg">
        <View className="flex-row items-start">
          <View className="mr-4">
            <Avatar image={user?.image} />
          </View>
          <View className="flex-1">
            <PostHeader username={user?.username} timestamp={"1h ago"} />
            <PostBody body={body} image={"https://picsum.photos/200"} />
            <PostFooter
              isReplied={isReplied}
              isLiked={isLiked}
              isShared={isShared}
              reactions={reactions}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
