import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

export default function MainScreen() {
  //loading the custom Pokemon font
  const [fontsLoaded, setLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      PokemonGB: require("../assets/fonts/PokemonGB.ttf"),
    });
    setLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  });

  //render
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Top />
        <Bottom />
      </View>
    );
  } else {
    return null;
  }
}

// ==========================================
// * Sub-Component *
// props/params: none
// description: The top part of my overall
// Pokedex component, mostly cosmetic
// ==========================================

function Top() {
  return (
    <View style={styles.top}>
      <Image
        style={{ height: 65, width: 161, margin: 25 }}
        source={{
          uri: "https://github.com/adamhirata/images/blob/master/headerIcons.png?raw=true",
        }}
      />
      <View style={{ width: "100%", alignItems: "center" }}>
        <View
          style={{
            width: "80%",
            borderLeftWidth: 20,
            borderLeftColor: "firebrick",
            padding: 7,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            Adam Hirata
          </Text>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View
              style={{
                width: "80%",
                borderWidth: 1,
                borderColor: "black",
                backgroundColor: "white",
                padding: 15,
                margin: 10,
              }}
            >
              <Text style={{ fontFamily: "PokemonGB", fontSize: 12 }}>
                Hello! My name is Adam Hirata, and welcome to my website.{" "}
                {"\n\n"}
                Please feel free to use this to get to know me more...
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

// ==========================================
// * Sub-Component *
// props/params: none
// description: The bottom part of my overall
// Pokedex component, also mostly cosmetic
// ==========================================

function Bottom() {
  function expoLink() {
    return (
      <Text
        style={(styles.bottomText, { textDecorationLine: "underline" })}
        onPress={() => {
          window.open("https://expo.io/", "_blank");
        }}
      >
        Expo
      </Text>
    );
  }
  const ghpagesLink = () => {
    return (
      <Text
        style={(styles.bottomText, { textDecorationLine: "underline" })}
        onPress={() => {
          window.open("https://pages.github.com/", "_blank");
        }}
      >
        GitHub Pages
      </Text>
    );
  };
  return (
    <View style={styles.bottom}>
      <Text style={styles.bottomText}>
        ㋡ Adam Hirata | Website made with {expoLink()} and {ghpagesLink()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: "50%",
    width: "50%",
    minWidth: 800,
    minHeight: 361,
    borderWidth: 10,
    borderColor: "black",
    borderBottomWidth: 3,
    borderBottomColor: "maroon",
    backgroundColor: "crimson",
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
    borderTopEndRadius: 50,
  },
  bottom: {
    height: "10%",
    width: "50%",
    minWidth: 800,
    borderWidth: 10,
    borderColor: "black",
    borderTopWidth: 3,
    borderTopColor: "maroon",
    backgroundColor: "crimson",
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 4.0,
    overflow: "visible",
    borderBottomEndRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottomText: {
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "slategray",
    alignItems: "center",
    justifyContent: "center",
  },
});
