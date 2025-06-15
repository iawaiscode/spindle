import { Text, View } from "react-native";
import Button from "../components/Button";

const Home = () => {
  return (
    <View>
      <Text className="text-3xl text-blue-300">Hello, world!</Text>
      <Text className="text-3xl text-red-300">Hello, world!</Text>
      <Button>
        <Text className="text-3xl text-red-300">Button</Text>
      </Button>
    </View>
  );
};

export default Home;
