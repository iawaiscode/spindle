import { Redirect } from "expo-router";

const Index = () => {
  const isLoggedIn = true;
  if (!isLoggedIn) return <Redirect href="/sign-in" />;
  if (isLoggedIn) return <Redirect href="/home" />;
};
export default Index;
