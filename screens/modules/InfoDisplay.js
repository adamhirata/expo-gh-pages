import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
} from "react-native";
import Skills from "./Skills";

export default function InfoDisplay() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const growAnim = useRef(new Animated.Value(0)).current;
  const marAnim = useRef(new Animated.Value(0)).current;

  const [isDisplayed, setDisplayed] = useState(false);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  const grow = () => {
    setDisplayed(true);
    Animated.timing(growAnim, {
      toValue: 500,
      duration: 500,
    }).start();
    marginGrow();
    fadeIn();
  };

  const shrink = () => {
    setDisplayed(false);
    Animated.timing(growAnim, {
      toValue: 0,
      duration: 500,
    }).start();
    marginShrink();
    fadeOut();
  };

  const marginGrow = () => {
    Animated.timing(marAnim, {
      toValue: 20,
      duration: 250,
    }).start();
  };

  const marginShrink = () => {
    Animated.timing(marAnim, {
      toValue: 0,
      duration: 250,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <View style={styles.screen}>
          <ImageBackground
            source={require("../../assets/battlebackground.png")}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="resize"
          ></ImageBackground>
        </View>
        <Animated.View
          style={[{ opacity: fadeAnim, width: growAnim, marginLeft: marAnim }]}
        >
          <Skills displayed={isDisplayed} />
        </Animated.View>
      </View>
      <View style={styles.options}>
        <Button onPress={grow} />
        <Button onPress={shrink} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  screen: {
    width: 300,
    height: 300,
    backgroundColor: "green",
    shadowColor: "greenyellow",
    shadowOpacity: 4.0,
    shadowRadius: 16.0,
    overflow: "visible",
    borderWidth: 1,
    borderColor: "greenyellow",
  },
  display: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
});
