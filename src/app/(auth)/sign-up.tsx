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

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSignUp = async () => {
    const { username, email, password, confirmPassword } = formData;

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      // TODO: Implement your registration logic here
      // await auth().createUserWithEmailAndPassword(email, password);

      // For now, just navigate to home after a short delay
      setTimeout(() => {
        router.replace("/(tabs)/home");
      }, 1000);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to create account");
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
            {/* Header */}
            <View className="items-center mb-8">
              <Text className="text-3xl font-bold text-white">
                Create Account
              </Text>
              <Text className="text-gray-400 mt-2">Join us today!</Text>
            </View>

            {/* Username Input */}
            <View className="mb-4">
              <Text className="text-gray-300 text-sm mb-2">Username</Text>
              <View className="flex-row items-center bg-gray-800 rounded-lg px-4 py-3">
                <Ionicons name="person-outline" size={20} color="#9CA3AF" />
                <TextInput
                  className="flex-1 text-white ml-3"
                  placeholder="Choose a username"
                  placeholderTextColor="#6B7280"
                  value={formData.username}
                  onChangeText={(text) => handleInputChange("username", text)}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
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
                  value={formData.email}
                  onChangeText={(text) => handleInputChange("email", text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            {/* Password Input */}
            <View className="mb-4">
              <Text className="text-gray-300 text-sm mb-2">Password</Text>
              <View className="flex-row items-center bg-gray-800 rounded-lg px-4 py-3">
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#9CA3AF"
                />
                <TextInput
                  className="flex-1 text-white ml-3"
                  placeholder="Create a password"
                  placeholderTextColor="#6B7280"
                  value={formData.password}
                  onChangeText={(text) => handleInputChange("password", text)}
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
            </View>

            {/* Confirm Password Input */}
            <View className="mb-6">
              <Text className="text-gray-300 text-sm mb-2">
                Confirm Password
              </Text>
              <View className="flex-row items-center bg-gray-800 rounded-lg px-4 py-3">
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#9CA3AF"
                />
                <TextInput
                  className="flex-1 text-white ml-3"
                  placeholder="Confirm your password"
                  placeholderTextColor="#6B7280"
                  value={formData.confirmPassword}
                  onChangeText={(text) =>
                    handleInputChange("confirmPassword", text)
                  }
                  secureTextEntry={confirmSecureTextEntry}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() =>
                    setConfirmSecureTextEntry(!confirmSecureTextEntry)
                  }
                  className="p-1"
                >
                  <Ionicons
                    name={
                      confirmSecureTextEntry ? "eye-off-outline" : "eye-outline"
                    }
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              className="bg-blue-600 rounded-lg py-4 items-center justify-center mb-6"
              onPress={handleSignUp}
              disabled={isLoading}
            >
              {isLoading ? (
                <Text className="text-white font-semibold">
                  Creating Account...
                </Text>
              ) : (
                <Text className="text-white font-semibold">Sign Up</Text>
              )}
            </TouchableOpacity>

            {/* Terms and Conditions */}
            <Text className="text-gray-400 text-xs text-center mb-6 px-4">
              By signing up, you agree to our{" "}
              <Text className="text-blue-400">Terms of Service</Text> and{" "}
              <Text className="text-blue-400">Privacy Policy</Text>
            </Text>

            {/* Sign In Link */}
            <View className="flex-row justify-center">
              <Text className="text-gray-400">Already have an account? </Text>
              <Link href="/sign-in" asChild>
                <TouchableOpacity>
                  <Text className="text-blue-400 font-semibold">Sign In</Text>
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
            <View className="flex-row justify-center gap-4 mb-8">
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

export default SignUp;
