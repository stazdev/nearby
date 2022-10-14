import * as React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import {
  ArrowLeft,
  CalendarWhite,
  DistanceWhite,
  Exclamation,
  Star,
} from "../../assets/icons";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { utils } from "../../utils";
import {
  CouponCard,
  FormInput,
  IconButton,
  TextButton,
  TextIcon,
} from "../../components";
import { Avatar, EcoCar, PremiumCar, VisaGreen } from "../../assets/images";

export default function RidePay({ navigation }) {
  const mapView = useRef();

  function renderRidesummary() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <View
          style={{
            borderTopLeftRadius: SIZES.padding * 2.4,
            borderTopRightRadius: SIZES.padding * 2.4,
            backgroundColor: COLORS.white,
            padding: SIZES.padding * 2.4,
          }}
        >
          <CouponCard>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar />
                <View style={{ marginLeft: SIZES.padding }}>
                  <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
                    John Sisley
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Star />
                    <Text style={{ color: COLORS.grey4, ...FONTS.h5 }}>
                      4.5
                    </Text>
                  </View>
                </View>
              </View>
            </View>

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
                  Ride Information
                </Text>
              </View>
            </View>
            {/* ride info */}
            <View>
              <TextIcon
                icon={<CalendarWhite />}
                title={"Driver licence number"}
                subtitle={"WDLBCDF455340H532"}
              />
              <TextIcon
                icon={<DistanceWhite />}
                title={"Passed KM"}
                subtitle={"56.5 km"}
              />
              <TextIcon
                icon={<CalendarWhite />}
                title={"Started at"}
                subtitle={"21 Jul 2021 5:46 PM"}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: COLORS.grey4, ...FONTS.h6 }}>
                Total amount
              </Text>
              <Text style={{ color: "black", ...FONTS.h3 }}>20.89</Text>
            </View>
          </CouponCard>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: SIZES.radius * 2,
            }}
          >
            <TextButton
              label={"End ride and pay"}
              buttonContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
                flex: 1,
                marginRight: SIZES.font,
              }}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h1,
                fontSize: 14,
              }}
              onPress={() => navigation.navigate("PaymentConfirmation")}
            />
            <IconButton
              containerStyle={{
                width: 56,
                height: 56,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.red,
              }}
              icon={<Exclamation />}
            />
          </View>
        </View>
      </View>
    );
  }
  return <View style={styles.container}>{renderRidesummary()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
