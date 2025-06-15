import { PostProps } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const usePosts = () => {
  return useQuery<PostProps[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/posts", {
        cache: "force-cache",
      });
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      return data.posts;
    },
  });
};
