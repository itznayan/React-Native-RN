import { View, Text } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

export default function Main() {
  return (
    <Animated.View
      sharedTransitionTag="1"
      className="h-20 w-20 bg-black"
    ></Animated.View>
  );
}
