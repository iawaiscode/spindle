import { Image, Text, View } from "react-native";

const PostBody = ({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: string;
}) => {
  return (
    <View>
      {title && <Text className="text-white font-bold mb-2">{title}</Text>}
      <Text className="text-gray-200 mb-4">{body}</Text>
      {/* Placeholder for image */}
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        className="w-full h-48 rounded-lg mb-4"
      />
    </View>
  );
};

export default PostBody;
