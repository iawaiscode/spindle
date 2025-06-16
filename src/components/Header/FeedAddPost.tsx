import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  Image as ImageIcon,
  PaperPlaneTilt,
  Video,
} from "phosphor-react-native";
import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const FeedAddPost = () => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleTextChange = (text: string) => {
    setPostText(text);
  };

  // Handle image upload
  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  // Handle post submission
  const handleSubmit = () => {};

  return (
    <View className={"p-4 "}>
      <View className="flex-1 bg-gray-800 rounded-lg">
        {/* Post text input container */}
        <View className="p-4">
          <TextInput
            className="text-lg text-white"
            placeholder="What's on your mind?"
            value={postText}
            onChangeText={handleTextChange}
            multiline={true}
            placeholderTextColor="#6e798c"
            textAlignVertical="top"
            textAlign="left"
            maxLength={280}
          />
        </View>

        {/* // Image preview container */}

        {image && (
          <View className="p-4">
            <Image
              source={{ uri: image }}
              className="w-full h-48 rounded-lg mb-4"
            />
          </View>
        )}

        {/* Container for image, emoji, GIF, and poll buttons */}

        <View className="flex-row justify-between">
          <TouchableOpacity className="p-4" onPress={handleImageUpload}>
            <ImageIcon size={22} color="#6e798c" />
          </TouchableOpacity>

          {/* // Video button */}
          <TouchableOpacity className="p-4">
            <Video size={22} color="#6e798c" />
          </TouchableOpacity>

          {/* // Poll button */}
          <TouchableOpacity className="p-4">
            <MaterialCommunityIcons name="poll" size={20} color="#6e798c" />
          </TouchableOpacity>

          {/* Post button */}
          <TouchableOpacity className="p-4" onPress={handleSubmit}>
            <PaperPlaneTilt size={20} color="#3b82f6" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FeedAddPost;
