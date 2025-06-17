import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    try {
      setIsLoading(true);
      // TODO: Implement your authentication logic here
      // await auth().signInWithEmailAndPassword(email, password);

      // For now, just navigate to home after a short delay
      setTimeout(() => {
        router.replace("/(tabs)/home");
      }, 1000);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-gray-900"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 px-6 justify-center">
            {/* Logo */}
            <View className="items-center mb-10">
              {/*<Image*/}
              {/*  source={require("@/assets/images/logo.png")}*/}
              {/*  className="w-32 h-32"*/}
              {/*  resizeMode="contain"*/}
              {/*/>*/}
              <Text className="text-3xl font-bold text-white mt-4">
                Welcome Back
              </Text>
              <Text className="text-gray-400 mt-2">Sign in to continue</Text>
            </View>

            {/* Email Input */}
            <View className="mb-4">
              <Text className="text-gray-300 text-sm mb-2">Email</Text>
              <View className="flex-row items-center bg-gray-800 rounded-lg px-4 py-3">
                <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
                <TextInput
                  className="flex-1 text-white ml-3"
                  placeholder="Enter your email"
                  placeholderTextColor="#6B7280"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            {/* Password Input */}
            <View className="mb-6">
              <Text className="text-gray-300 text-sm mb-2">Password</Text>
              <View className="flex-row items-center bg-gray-800 rounded-lg px-4 py-3">
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#9CA3AF"
                />
                <TextInput
                  className="flex-1 text-white ml-3"
                  placeholder="Enter your password"
                  placeholderTextColor="#6B7280"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={secureTextEntry}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                  className="p-1"
                >
                  <Ionicons
                    name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="self-end mt-2">
                <Text className="text-blue-400 text-sm">Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              className="bg-blue-600 rounded-lg py-4 items-center justify-center mb-6"
              onPress={handleSignIn}
              disabled={isLoading}
            >
              {isLoading ? (
                <Text className="text-white font-semibold">Signing In...</Text>
              ) : (
                <Text className="text-white font-semibold">Sign In</Text>
              )}
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View className="flex-row justify-center">
              <Text className="text-gray-400">Don't have an account? </Text>
              <Link href="/sign-up" asChild>
                <TouchableOpacity>
                  <Text className="text-blue-400 font-semibold">Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>

            {/* Divider */}
            <View className="flex-row items-center my-6">
              <View className="flex-1 h-px bg-gray-700" />
              <Text className="text-gray-500 px-4">OR</Text>
              <View className="flex-1 h-px bg-gray-700" />
            </View>

            {/* Social Login Buttons */}
            <View className="flex-row justify-center gap-4">
              <TouchableOpacity className="bg-gray-800 p-3 rounded-full">
                <Ionicons name="logo-google" size={24} color="#EF4444" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-800 p-3 rounded-full">
                <Ionicons name="logo-apple" size={24} color="#9CA3AF" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-800 p-3 rounded-full">
                <Ionicons name="logo-facebook" size={24} color="#3B82F6" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
