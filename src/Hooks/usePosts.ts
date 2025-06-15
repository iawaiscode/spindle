import { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      return data.posts;
    },
  });
};
