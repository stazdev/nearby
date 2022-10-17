import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const CustomBottomSheet = ({ children, snapPoints }) => {
  // ref
  const bottomSheetRef = useRef(null);
  // const handleSheetChanges = useCallback((index) => {
  //   console.log("handleSheetChanges", index);
  // }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
      animateOnMount={true}
    >
      {children}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default CustomBottomSheet;
