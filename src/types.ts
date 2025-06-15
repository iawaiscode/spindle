export interface Children {
  children: React.ReactNode;
  className?: string;
}
export type User = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  bio: string;
  email: string;
  image: string;
};

export type Post = {
  id: string;
  title: string;
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
