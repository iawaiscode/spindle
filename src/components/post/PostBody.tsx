import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

export const PostBody = ({ body, image }: { body: string; image: string }) => {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const toggleImageFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
  };

  return (
    <View>
      <Text className="text-white/80 font-regular leading-5 tracking-wide mb-4">
        {body}
      </Text>
      <TouchableOpacity onPress={toggleImageFullscreen} activeOpacity={0.8}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="w-full h-48 rounded-lg mb-4"
        />
      </TouchableOpacity>

      <Modal
        visible={isImageFullscreen}
        transparent={true}
        onRequestClose={toggleImageFullscreen}
        animationType="fade"
      >
        <TouchableOpacity
          activeOpacity={1}
          className="flex-1 bg-black/90 justify-center items-center p-4"
          onPress={toggleImageFullscreen}
        >
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            className="w-full h-full"
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
