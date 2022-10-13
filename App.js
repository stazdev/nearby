import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Map, Signin, Signup, Cars } from "./screens";
import CustomDrawer from "./navigation/CustomDrawer";
import { COLORS } from "./constants";
import { TabProvider } from "./context/TabContext";

const Drawer = createDrawerNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TabProvider>
      <NavigationContainer>
        <StatusBar StatusBarStyle="auto" />
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: COLORS.white,
            },
            swipeEnabled: false,
          }}
          drawerContent={({ navigation }) => (
            <CustomDrawer navigation={navigation} />
          )}
          initialRouteName="Signin"
        >
          <Drawer.Screen name="Signin" component={Signin} />
          <Drawer.Screen name="Signup" component={Signup} />
          <Drawer.Screen name="Map" component={Map} />
          <Drawer.Screen name="Cars" component={Cars} />
        </Drawer.Navigator>
      </NavigationContainer>
    </TabProvider>
  );
}
