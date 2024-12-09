import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import AppNavigation from "./src/AppNavigation";
import { Appprovider } from "./src/Appcontext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import Pay from "./src/Pay";
import { Provider } from "react-redux";
import { store } from "./src/Store/Store";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "DesignerVN-Poppins-ExtraBold": require("./assets/fonts/DesignerVN-Poppins-ExtraBold.ttf"),
    "DesignerVN-Poppins-Regular": require("./assets/fonts/DesignerVN-Poppins-Regular.ttf"),
    "Lato Black": require("./assets/fonts/Lato Black.ttf"),
    "Lato Italic": require("./assets/fonts/Lato Italic.ttf"),
    "Lato Medium": require("./assets/fonts/Lato Medium.ttf"),
    "Lato Regular": require("./assets/fonts/Lato Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <Appprovider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar translucent backgroundColor={"rgba(0,0,0,0)"} />
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <AppNavigation />
          </View>
        </SafeAreaView>
      </Appprovider>
    </Provider>
  );
}
