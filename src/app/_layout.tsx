import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
  useFonts,
} from "@expo-google-fonts/lato";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import "../global.css";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: "#1e1e1e",
      primary: "#6e798c",
      card: "#252525",
      text: "white",
      border: "#2d2d2d",
      green: "#22c55e",
      blue: "#3b82f6",
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={MyTheme}>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar hidden />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default RootLayout;
