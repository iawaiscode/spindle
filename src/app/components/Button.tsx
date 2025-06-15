import { Children } from "@/types";
import { View } from "react-native";

const Button = ({ children }: Children) => {
  return <View>{children}</View>;
};

export default Button;
