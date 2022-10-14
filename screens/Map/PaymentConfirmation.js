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
  ArrowCircle,
  ArrowLeft,
  CalendarWhite,
  ChevronRight,
  DistanceWhite,
  Location,
  LocationGrey,
  locationPin,
  LocationWhite,
  navigator,
  ProfileGrey,
  ProfileWhite,
  WalletWhite,
} from "../../assets/icons";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { utils } from "../../utils";
import {
  CouponCard,
  CustomBottomSheet,
  FormInput,
  IconButton,
  TextButton,
  TextIcon,
} from "../../components";
import { EcoCar, PremiumCar, VisaGreen } from "../../assets/images";

export default function PaymentConfirmation({ navigation }) {
  const mapView = useRef();
  const snapPoints = React.useMemo(
    () => ["15%", "30%", "45%", "60%", "75%"],
    []
  );
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState("");

  useEffect(() => {
    let initialRegion = {
      latitude: 1.5,
      longitude: 100,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 1.3,
      longitude: 93,
    };

    setRegion(initialRegion);
    setToLoc(destination);
    setFromLoc({
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    });
  }, []);

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={styles.map}
      >
        {fromLoc && (
          <Marker
            key={"FromLoc"}
            coordinate={fromLoc}
            tracksViewChanges={false}
            icon={navigator}
            rotation={angle}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}
        {toLoc && (
          <Marker
            key={"ToLoc"}
            coordinate={toLoc}
            tracksViewChanges={false}
            icon={locationPin}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}
        <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={"AIzaSyAyspHAyAwCZsh_KsHnmvnI2I5vvENSrxA"}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(result) => {
            setDuration(Math.ceil(result.duration));
            if (!isReady) {
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });

              if (result.coordinates.length >= 2) {
                let angle = utils.calculateAngle(result.coordinates);

                setAngle(angle);
              }

              setIsReady(true);
            }
          }}
        />
      </MapView>
    );
  }

  function renderHeader() {
    return (
      <>
        <IconButton
          icon={<ArrowLeft />}
          containerStyle={{
            position: "absolute",
            top: StatusBar.currentHeight,
            left: SIZES.padding * 2.4,
          }}
          onPress={() => {
            navigation.navigate("SelectedCar");
          }}
        />
      </>
    );
  }

  function renderSearch() {
    return (
      <CustomBottomSheet snapPoints={snapPoints}>
        <View
          style={{
            borderTopLeftRadius: SIZES.padding * 2.4,
            borderTopRightRadius: SIZES.padding * 2.4,
            backgroundColor: COLORS.white,
            padding: SIZES.padding * 2.4,
          }}
        >
          <View
            style={{ alignItems: "center", marginVertical: SIZES.padding * 2 }}
          >
            <ArrowCircle />
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h2,
                textAlign: "center",
                marginTop: SIZES.padding * 2,
              }}
            >
              Thank You!
            </Text>
            <Text
              style={{
                color: COLORS.grey2,
                ...FONTS.h4,
                textAlign: "center",
              }}
            >
              We hope you enjoyed the ride
            </Text>
          </View>
          <CouponCard>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextIcon
                  icon={<WalletWhite />}
                  title={"Total amount"}
                  subtitle={"22.80"}
                  subtitleStyle={{ color: COLORS.black, ...FONTS.h3 }}
                />
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
                  Driving History
                </Text>
              </View>
            </View>
            {/* ride info */}
            <View>
              <TextIcon
                icon={<DistanceWhite />}
                title={"Passed Km"}
                subtitle={"20.3"}
              />
              <TextIcon
                icon={<CalendarWhite />}
                title={"Started time"}
                subtitle={"21 Jul 2021 5:46 PM"}
              />
              <TextIcon
                icon={<CalendarWhite />}
                title={"Ended time"}
                subtitle={"21 Jul 2021 5:46 PM"}
              />
            </View>
          </CouponCard>

          <TextButton
            label={"Lets hit the road"}
            buttonContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              marginTop: SIZES.radius * 2,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.h1,
              fontSize: 14,
            }}
            onPress={() => navigation.navigate("RidePay")}
          />
        </View>
      </CustomBottomSheet>
    );
  }
  return (
    <View style={styles.container}>
      {renderMap()}
      {renderHeader()}
      {renderSearch()}
    </View>
  );
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
