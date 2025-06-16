import { Children } from "@/types";
import { TouchableOpacity } from "react-native";

export const Button = ({ children }: Children) => {
  return (
    <TouchableOpacity className="bg-blue-500 p-2 rounded-md">
      {children}
    </TouchableOpacity>
  );
};
