export interface Children {
  children: React.ReactNode;
  className?: string;
}
export type User = {
  id: string;
  username: string;
  name: string;
  bio: string;
  email: string;
  image: string;
};

export type Post = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author: User;
  replies?: Post[];
  likes: number;
  _count: {
    replies: number;
    likes: number;
  };
};
