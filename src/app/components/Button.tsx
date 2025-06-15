import { View } from "react-native";
import { Children } from "../../types";

const Button = ({ children }: Children) => {
  return <View>{children}</View>;
};

export default Button;
