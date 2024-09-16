import { View, Text } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

export default function Home() {
  return (
    <Animated.View
      className="h-full w-full bg-black"
      sharedTransitionTag="1"
    ></Animated.View>
  );
}
