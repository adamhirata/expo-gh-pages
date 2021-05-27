import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
} from "react-native";

export default function InfoDisplay() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const growAnim = useRef(new Animated.Value(0)).current;

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
    Animated.timing(growAnim, {
      toValue: 300,
      duration: 500,
    }).start();
    fadeIn();
  };

  const shrink = () => {
    Animated.timing(growAnim, {
      toValue: 0,
      duration: 500,
    }).start();
    fadeOut();
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Animated.View
          style={[styles.screen, { opacity: fadeAnim, width: growAnim }]}
        >
          <ImageBackground
            source={require("../../assets/battlebackground.png")}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="resize"
          ></ImageBackground>
        </Animated.View>
        <Animated.View style={styles.screen}>
          <ImageBackground
            source={require("../../assets/battlebackground.png")}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="resize"
          ></ImageBackground>
        </Animated.View>
        <Animated.View
          style={[styles.screen, { opacity: fadeAnim, width: growAnim }]}
        >
          <ImageBackground
            source={require("../../assets/battlebackground.png")}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="resize"
          ></ImageBackground>
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
