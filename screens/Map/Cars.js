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
  ChevronRight,
  Location,
  LocationGrey,
  locationPin,
  navigator,
  ProfileGrey,
} from "../../assets/icons";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { utils } from "../../utils";
import { FormInput, IconButton, TextButton } from "../../components";
import { EcoCar, PremiumCar, VisaGreen } from "../../assets/images";

export default function Cars({ navigation }) {
  const mapView = useRef();
  const cars = [
    {
      id: 1,
      name: "BMW X5",
      type: "Premium",
      image: <PremiumCar />,
      price: 1.2,
      seat: 5,
    },
    {
      id: 2,
      name: "Nissan Leaf",
      type: "Eco",
      image: <EcoCar />,
      price: 1,
      seat: 4,
    },
    {
      id: 3,
      name: "BMW X5",
      type: "Premium",
      image: <PremiumCar />,
      price: 1.2,
      seat: 5,
    },
    {
      id: 4,
      name: "Nissan Leaf",
      type: "Eco",
      image: <EcoCar />,
      price: 1,
      seat: 4,
    },
  ];
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState("");
  const [loc, setLoc] = useState("");
  const [people, setPeople] = useState(0);

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
            navigation.navigate("Map");
          }}
        />
      </>
    );
  }

  function renderSearch() {
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
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h2,
              textAlign: "center",
              paddingVertical: SIZES.padding * 2,
            }}
          >
            Cars in your area
          </Text>
          <View style={{ paddingBottom: 20 }}>
            <FlatList
              data={cars}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    width: 142,
                    backgroundColor: COLORS.grey1,
                    marginLeft: index == 0 ? SIZES.padding : 18,
                    marginRight: index == cars.length - 1 ? SIZES.padding : 0,
                    borderRadius: SIZES.radius,
                    paddingHorizontal: 16.5,
                    paddingVertical: SIZES.padding * 2,
                    position: "relative",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.primary,
                      ...FONTS.h4,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginVertical: SIZES.padding * 1.2,
                    }}
                  >
                    {item.image}
                  </View>
                  <Text style={{ textAlign: "center", ...FONTS.h5 }}>
                    {item.price} €/min
                  </Text>
                </View>
              )}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => console.log("wallet")}
              style={{
                backgroundColor: COLORS.grey1,
                height: 60,
                flexDirection: "row",
                paddingHorizontal: 19,
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: SIZES.radius,
                marginTop: SIZES.radius * 2,
                marginHorizontal: SIZES.padding * 2.4,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <VisaGreen />
                <Text style={{ ...FONTS.h5, marginLeft: SIZES.padding }}>
                  ****1234
                </Text>
              </View>
              <ChevronRight />
            </TouchableOpacity>
            <TextButton
              label={"Go next"}
              buttonContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
                marginTop: SIZES.radius * 2,
                marginHorizontal: SIZES.padding * 2.4,
              }}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h1,
                fontSize: 14,
              }}
              onPress={() => navigation.navigate("Map")}
            />
          </View>
        </View>
      </View>
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
