import { useQuery } from "@tanstack/react-query";

export const useUsers = (userId?: number | string) => {
  return useQuery({
    queryKey: ["users", userId ?? "all"],
    queryFn: async () => {
      const url = userId
        ? `https://dummyjson.com/users/${userId}`
        : "https://dummyjson.com/users";

      const res = await fetch(url, {
        cache: "force-cache",
      });

      if (!res.ok) throw new Error("Failed to fetch user(s)");

      const data = await res.json();
      return userId ? data : data.users;
    },
  });
};
