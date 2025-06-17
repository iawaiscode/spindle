import { Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export const Avatar = ({ image }: { image?: string }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.replace("/profile");
      }}
    >
      <Image
        source={{ uri: image }}
        className="w-12 h-12 rounded-full bg-white border border-gray-300"
      />
    </TouchableOpacity>
  );
};
