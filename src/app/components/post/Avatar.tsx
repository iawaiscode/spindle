import { Image } from "react-native";

const Avatar = ({ image }: { image?: string }) => {
  return (
    <Image
      source={{ uri: image }}
      className="w-12 h-12 rounded-full bg-white"
    />
  );
};

export default Avatar;
