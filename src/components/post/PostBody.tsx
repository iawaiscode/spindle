import { Image, Text, View } from "react-native";

export const PostBody = ({ body, image }: { body: string; image: string }) => {
  return (
    <View>
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
