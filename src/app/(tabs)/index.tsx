import { useUsers } from "@/Hooks/useUsers";
import { Text, View } from "react-native";

const Home = () => {
  const { data } = useUsers();

  const users = data?.map((user) => (
    <View key={user.id}>
      <Text className="text-red-300">{user.firstName}</Text>
    </View>
  ));

  return (
    <View>
      <Text className="text-3xl text-blue-300">Hello, world!</Text>
      <Text className="text-3xl text-red-300">Hello, world!</Text>
      {users}
    </View>
  );
};

export default Home;
