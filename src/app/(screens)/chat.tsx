import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  ChatsCircle,
  MagnifyingGlass,
  Phone,
  Users,
} from "phosphor-react-native";

interface ChatItemProps {
  chat: {
    id: number;
    name: string;
    message: string;
    time: string;
    avatar: string;
    unread: boolean;
    online: boolean;
    lastSeen: string;
  };
}

const Chat = () => {
  // Chat data
  const chatData = [
    {
      id: 1,
      name: "Sarah Wilson",
      message: "Hey! How was your day?",
      time: "2m",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      unread: true,
      online: true,
      lastSeen: "typing...",
    },
    {
      id: 2,
      name: "Mike Johnson",
      message: "Thanks for the help earlier",
      time: "15m",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      unread: false,
      online: true,
      lastSeen: "online",
    },
    {
      id: 3,
      name: "Emma Davis",
      message: "Can't wait for the weekend!",
      time: "1h",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      unread: true,
      online: false,
      lastSeen: "yesterday at 8:45 PM",
    },
  ];

  // Chat list item component
  const ChatItem = ({ chat }: ChatItemProps) => (
    <TouchableOpacity
      className={`flex-row items-center px-4 py-3 ${chat.unread ? "bg-card" : "bg-background"}`}
      activeOpacity={0.7}
    >
      <View className="relative">
        <Image
          source={{ uri: chat.avatar }}
          className="w-14 h-14 rounded-full"
        />
        {chat.online && (
          <View className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green rounded-full border-2 border-background" />
        )}
      </View>

      <View className="flex-1 ml-4 border-b border-border pb-3">
        <View className="flex-row items-center justify-between mb-1">
          <Text className="text-base font-semibold text-white">
            {chat.name}
          </Text>
          <Text className="text-xs text-primary">{chat.time}</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text
            className={`text-sm flex-1 mr-2 ${chat.unread ? "font-semibold text-white" : "text-primary"}`}
            numberOfLines={1}
          >
            {chat.lastSeen === "typing..." ? (
              <Text className="text-blue font-medium">typing...</Text>
            ) : chat.lastSeen === "online" ? (
              <Text className="text-green text-xs">online</Text>
            ) : (
              chat.message
            )}
          </Text>

          {chat.unread ? (
            <View className="bg-blue rounded-full w-5 h-5 items-center justify-center">
              <Text className="text-white text-xs font-bold">1</Text>
            </View>
          ) : (
            <Feather name="check" size={16} color="#6e798c" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-background">
      {/* Tabs */}
      <View className="flex-row justify-between pb-2 px-4 border-b border-border">
        <TouchableOpacity className="items-center justify-center py-3 w-1/3">
          <Users size={25} color="#6e798c" weight={"bold"} />
        </TouchableOpacity>
        <TouchableOpacity className="items-center justify-center py-3 w-1/3 border-b-2 border-blue-500">
          <ChatsCircle size={25} color="#fff" weight={"fill"} />
        </TouchableOpacity>
        <TouchableOpacity className="items-center justify-center py-3 w-1/3">
          <Phone size={25} color="#6e798c" weight={"bold"} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-2 bg-background">
        <View className="flex-row items-center bg-border rounded-lg px-6 py-3">
          <MagnifyingGlass size={18} color="#6e798c" />
          <TextInput
            placeholder="Search messages"
            placeholderTextColor="#6e798c"
            className="flex-1 ml-2 text-base text-white"
          />
        </View>
      </View>

      {/* Chat List */}
      <ScrollView className="flex-1">
        {chatData.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </ScrollView>

      {/* New Chat Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-blue-500 w-14 h-14 rounded-full items-center justify-center shadow-lg"
        activeOpacity={0.9}
      >
        <Ionicons name="chatbubbles" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Chat;
