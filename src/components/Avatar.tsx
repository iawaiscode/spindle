import { Image } from "react-native";

export const Avatar = ({ image }: { image?: string }) => {
  return (
    <Image
      source={{ uri: image }}
      className="w-12 h-12 rounded-full bg-white border border-gray-300"
    />
  );
};
