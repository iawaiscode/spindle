export interface Children {
  children: React.ReactNode;
  className?: string;
}
export type UserProps = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  bio: string;
  email: string;
  image: string;
};

export type PostProps = {
  id: string;
  body: string;
  userId: string;

  reactions: {
    dislikes: number;
    likes: number;
  };
};
