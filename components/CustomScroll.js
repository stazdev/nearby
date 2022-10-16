import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextIconTwo from "./TextIconTwo";
import { WalletWhite } from "../assets/icons";
import { COLORS, FONTS, SIZES } from "../constants";

const transactions = [
  {
    id: 1,
    name: "BMW X5 Premium",
    date: "21/07/2021",
    amount: 22.4,
  },
  {
    id: 2,
    name: "BMW X5 Premium",
    date: "21/07/2021",
    amount: 22.4,
  },
  {
    id: 3,
    name: "BMW X5 Premium",
    date: "21/07/2021",
    amount: 22.4,
  },
  {
    id: 4,
    name: "BMW X5 Premium",
    date: "21/07/2021",
    amount: 22.4,
  },
  {
    id: 5,
    name: "BMW X5 Premium",
    date: "21/07/2021",
    amount: 22.4,
  },
  {
    id: 6,
    name: "BMW X5 Premium",
    date: "21/07/2021",
    amount: 22.4,
  },
];
const CustomScroll = ({ children }) => {
  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View>{children}</View>
            <View>
              <Text style={{ ...FONTS.h3, color: COLORS.primary }}>
                Recent Transactions
              </Text>
            </View>
          </>
        }
        renderItem={({ item, index }) => (
          <TextIconTwo
            key={item.id}
            containerStyle={{
              backgroundColor: COLORS.grey1,
              padding: SIZES.padding * 2,
              borderRadius: SIZES.radius,
            }}
            rightText={item.amount}
            description={item.name}
            time={item.date}
            icon={<WalletWhite />}
          />
        )}
      />
    </View>
  );
};

export default CustomScroll;

const styles = StyleSheet.create({});
