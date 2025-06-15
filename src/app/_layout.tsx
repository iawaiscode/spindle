import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
  useFonts,
} from "@expo-google-fonts/lato";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "../global.css";

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
      primary: "white",
    },
  };

  return (
    <ThemeProvider value={MyTheme}>
      <Stack />
      <StatusBar barStyle="light-content" />
    </ThemeProvider>
  );
};
export default RootLayout;
