import { View, Text, Pressable } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

export default function Home({ navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate("Main")}>
      <Animated.View
        className="h-20 w-20 bg-black"
        sharedTransitionTag="1"
      ></Animated.View>
    </Pressable>
  );
}
