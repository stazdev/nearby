import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { CouponCard, Header, TextIcon } from "../../components";
import { CalendarWhite, DistanceWhite, WalletWhite } from "../../assets/icons";

const histories = [
  {
    id: 1,
    amount: 22.8,
    distance: 50.5,
    date: "21 Jul 2021 5:46 PM",
  },
  {
    id: 2,
    amount: 22.8,
    distance: 50.5,
    date: "21 Jul 2021 5:46 PM",
  },
  {
    id: 3,
    amount: 33.4,
    distance: 50.5,
    date: "21 Jul 2021 5:46 PM",
  },
];
const DrivingHistory = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding * 2.4,
      }}
    >
      <Header title={"Driving History"} />

      <FlatList
        data={histories}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CouponCard couponStyle={{ marginBottom: SIZES.padding * 2.4 }}>
            <TextIcon
              title={"Total Amount"}
              subtitle={`€${item.amount}`}
              subtitleStyle={{ ...FONTS.h3 }}
              icon={<WalletWhite />}
            />
            <View
              style={{
                backgroundColor: COLORS.grey5,
                height: 1,
                marginVertical: SIZES.padding * 2,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    left: "30%",
                    textAlign: "center",
                    backgroundColor: COLORS.grey1,
                    color: COLORS.grey4,
                    ...FONTS.h6,
                  }}
                >
                  Driving History
                </Text>
              </View>
            </View>
            <TextIcon
              title={"Passed Km"}
              subtitle={item.distance}
              subtitleStyle={{ ...FONTS.h6 }}
              icon={<DistanceWhite />}
            />
            <TextIcon
              title={"Date"}
              subtitle={item.date}
              subtitleStyle={{ ...FONTS.h6 }}
              icon={<CalendarWhite />}
            />
          </CouponCard>
        )}
      />
    </SafeAreaView>
  );
};
export default DrivingHistory;

const styles = StyleSheet.create({});
