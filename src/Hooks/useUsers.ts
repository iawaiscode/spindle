import { User } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      return data.users;
    },
  });
};
