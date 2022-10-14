import { Text, TouchableOpacity, View, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import {
  Bookmark,
  Calling,
  Category,
  Chat,
  Close,
  Discount,
  Logout,
  Star,
  Wallet,
} from "../assets/icons";
import { Avatar } from "../assets/images";
import { TabContext } from "../context/TabContext";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 54,
        alignItems: "center",
        marginLeft: SIZES.padding * 2.4,
        paddingLeft: SIZES.font,
        borderTopLeftRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
        backgroundColor: isFocused ? COLORS.grey1 : null,
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon}
      <Text
        style={{
          marginLeft: SIZES.padding * 1.2,
          color: COLORS.primary,
          ...FONTS.h4,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

function CustomDrawer({ navigation }) {
  const { selectedTab, setSelectedTab } = useContext(TabContext);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          height: SIZES.height * 0.24,
          paddingHorizontal: SIZES.padding * 2,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.closeDrawer()}
          style={{
            alignItems: "flex-end",
            paddingTop: StatusBar.currentHeight,
          }}
        >
          <Close />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar />
          <View style={{ marginLeft: SIZES.padding }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              Azeez Shola
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Star />
              <Text style={{ color: COLORS.white, ...FONTS.h5 }}> 4.5</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, marginTop: SIZES.padding * 3 }}>
        <CustomDrawerItem
          label={"Messages"}
          icon={<Chat />}
          isFocused={selectedTab == "Messages"}
          onPress={() => {
            setSelectedTab("Messages"), navigation.navigate("Messages");
          }}
        />
        <CustomDrawerItem
          label={"Driving History"}
          icon={<Bookmark />}
          isFocused={selectedTab == "Driving"}
          onPress={() => {
            setSelectedTab("Driving"), navigation.navigate("DrivingHistory");
          }}
        />
        <CustomDrawerItem
          label={"Wallet"}
          icon={<Wallet />}
          isFocused={selectedTab == "Wallet"}
          onPress={() => {
            setSelectedTab("Wallet"), navigation.navigate("Map");
          }}
        />
        <CustomDrawerItem
          label={"Discount"}
          icon={<Discount />}
          isFocused={selectedTab == "Discount"}
          onPress={() => {
            setSelectedTab("Discount"), navigation.navigate("Map");
          }}
        />
        <CustomDrawerItem
          label={"Support"}
          icon={<Calling />}
          isFocused={selectedTab == "Support"}
          onPress={() => {
            setSelectedTab("Support"), navigation.navigate("Map");
          }}
        />

        {/* vertical line */}
        <View
          style={{
            height: 1,
            marginTop: 30,
            marginLeft: SIZES.padding * 2.4,
            backgroundColor: COLORS.grey3,
          }}
        />
      </View>

      <View style={{ marginBottom: SIZES.padding }}>
        <CustomDrawerItem
          label={"Settings"}
          icon={<Category />}
          isFocused={selectedTab == "Settings"}
          onPress={() => {
            setSelectedTab("Settings"), navigation.navigate("Map");
          }}
        />
        <CustomDrawerItem label={"Log Out"} icon={<Logout />} />
      </View>
    </View>
  );
}

export default CustomDrawer;
