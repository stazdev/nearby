import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Map,
  Signin,
  Signup,
  Cars,
  SelectedCar,
  RidePay,
  PaymentConfirmation,
  Messages,
  DrivingHistory,
  Wallet,
  AddCard,
} from "./screens";
import CustomDrawer from "./navigation/CustomDrawer";
import { COLORS } from "./constants";
import { TabProvider } from "./context/TabContext";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  const [loaded] = useFonts({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyCTvYYUEQBcRmabrOZPt7L9hv3HzLXW9Q0",
    authDomain: "near-by-car.firebaseapp.com",
    projectId: "near-by-car",
    storageBucket: "near-by-car.appspot.com",
    messagingSenderId: "387939223266",
    appId: "1:387939223266:web:c8b35bace82309078bc0bb",
    measurementId: "G-0V9XQGQ7RC",
    databaseURL: "https://near-by-car-default-rtdb.firebaseio.com/",
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  if (!loaded) {
    return null;
  }
  if (!isLoggedIn) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Signin"
      >
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    );
  } else {
    return (
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
        initialRouteName="Map"
      >
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Cars" component={Cars} />
        <Drawer.Screen name="SelectedCar" component={SelectedCar} />
        <Drawer.Screen name="RidePay" component={RidePay} />
        <Drawer.Screen
          name="PaymentConfirmation"
          component={PaymentConfirmation}
        />
        <Drawer.Screen name="Messages" component={Messages} />
        <Drawer.Screen name="DrivingHistory" component={DrivingHistory} />
        <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="AddCard" component={AddCard} />
      </Drawer.Navigator>
    );
  }
}

export default () => {
  return (
    <TabProvider>
      <NavigationContainer>
        <StatusBar StatusBarStyle="auto" />
        <App />
      </NavigationContainer>
    </TabProvider>
  );
};
