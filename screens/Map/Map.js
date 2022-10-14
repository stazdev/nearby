import * as React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import {
  LocationGrey,
  locationPin,
  Menu,
  navigator,
  ProfileGrey,
} from "../../assets/icons";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { utils } from "../../utils";
import {
  CustomBottomSheet,
  FormInput,
  IconButton,
  TextButton,
} from "../../components";

export default function Map({ navigation }) {
  const mapView = useRef();
  const snapPoints = React.useMemo(() => ["15%", "30%", "45%"], []);

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
          icon={<Menu />}
          containerStyle={{
            position: "absolute",
            top: StatusBar.currentHeight,
            left: SIZES.padding * 2.4,
          }}
          onPress={() => {
            navigation.openDrawer();
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
            padding: SIZES.padding * 2.4,
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
              paddingBottom: SIZES.padding * 2,
            }}
          >
            Where are you?
          </Text>
          <View>
            <FormInput
              placeholder={"Your location"}
              inputStyle={{ ...FONTS.h4, marginRight: SIZES.base }}
              prependComponent={<LocationGrey />}
              value={loc}
              onChange={(value) => {
                setLoc(value);
              }}
            />
            <FormInput
              placeholder={"Number of people"}
              inputStyle={{ ...FONTS.h4, marginRight: SIZES.base }}
              containerStyle={{ marginTop: SIZES.radius * 2 }}
              prependComponent={<ProfileGrey />}
              value={people}
              onChange={(value) => {
                setPeople(value);
              }}
            />

            <TextButton
              label={"Search cars"}
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
              onPress={() => navigation.navigate("Cars")}
            />
          </View>
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
