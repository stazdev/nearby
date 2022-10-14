import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { Header, TextIconTwo } from "../../components";
import { Commercial, DiscountWhite, WalletWhite } from "../../assets/icons";

const messages = [
  {
    id: 1,
    message: "40% Discount for special day with promocode FRIDAY40",
    time: "02/09/2020",
    type: "promotion",
  },
  {
    id: 2,
    message: "40% Discount for special day with promocode FRIDAY40",
    time: "02/09/2020",
    type: "promotion",
  },
  {
    id: 3,
    message: "There will be a system maintenance",
    time: "02/09/2020",
    type: "announcement",
  },
];
const Messages = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding * 2.4,
      }}
    >
      <Header title={"Messages"} />
      <View>
        {messages.map((message) => {
          return (
            <TextIconTwo
              description={message.message}
              time={message.time}
              containerStyle={{
                borderBottomWidth: 1,
                borderBottomColor: COLORS.grey1,
                paddingBottom: SIZES.padding * 2.4,
              }}
              leftStyle={{
                alignItems: "flex-start",
              }}
              iconStyle={{
                backgroundColor:
                  message.type === "announcement"
                    ? COLORS.yellow
                    : COLORS.green,
              }}
              icon={
                message.type === "promotion" ? (
                  <DiscountWhite />
                ) : (
                  <Commercial />
                )
              }
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({});
