import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Skills(displayed) {
  const images = {
    javascript: require("../../assets/skills/javascript.png"),
    java: require("../../assets/skills/java.png"),
    python: require("../../assets/skills/python.png"),
    cpp: require("../../assets/skills/cpp.png"),
    c: require("../../assets/skills/c.png"),
    matlab: require("../../assets/skills/matlab.png"),
    react: require("../../assets/skills/react.png"),
    jest: require("../../assets/skills/jest.png"),
    junit: require("../../assets/skills/junit.png"),
    opengl: require("../../assets/skills/opengl.png"),
  };
  const objecto = {
    name: null,
    imguri: null,
    percentage: null,
    displayed: displayed,
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.type}>[!] LANGUAGES:</Text>
        <Skill
          props={{
            name: "JavaScript",
            imguri: images.javascript,
            percentage: 85,
            displayed: displayed,
          }}
        />
        <Skill
          props={{
            name: "Java",
            imguri: images.java,
            percentage: 70,
            displayed: displayed,
          }}
        />
        <Skill
          props={{
            name: "Python",
            imguri: images.python,
            percentage: 50,
            displayed: displayed,
          }}
        />
        <Skill
          props={{
            name: "C++",
            imguri: images.cpp,
            percentage: 40,
            displayed: displayed,
          }}
        />
        <Skill
          props={{
            name: "C",
            imguri: images.c,
            percentage: 35,
            displayed: displayed,
          }}
        />
        <Skill
          props={{
            name: "Matlab",
            imguri: images.matlab,
            percentage: 20,
            displayed: displayed,
          }}
        />
        <Text style={styles.type}>[!] FRAMEWORKS:</Text>
        <Skill
          props={{
            name: "React/React Native",
            imguri: images.react,
            percentage: 80,
            displayed: displayed,
          }}
        />
        <Skill
          props={{
            name: "Jest",
            imguri: images.jest,
            percentage: 50,
            displayed: displayed,
          }}
        />
        <Skill
          props={{
            name: "JUnit",
            imguri: images.junit,
            percentage: 40,
            displayed: displayed,
          }}
        />
        <Skill
          props={{
            name: "OpenGL",
            imguri: images.opengl,
            percentage: 40,
            displayed: displayed,
          }}
        />
        <Text style={styles.type}>[!] SOFT SKILLS:</Text>
        <Text style={styles.type}>[!] MISCELLANEOUS:</Text>
      </ScrollView>
    </View>
  );
}

function Skill(props) {
  const percentAnim = useRef(new Animated.Value(0)).current;
  const percentString = (val) => {
    return val + "%";
  };

  const percentGrow = () => {
    Animated.timing(percentAnim, {
      toValue: props.props.percentage,
      duration: 1000,
    }).start();
  };

  const percentShrink = () => {
    Animated.timing(percentAnim, {
      toValue: 0,
      duration: 1000,
    }).start();
  };

  useEffect(() => {
    if (props.props.displayed.displayed) {
      percentGrow();
    } else {
      percentShrink();
    }
  }, [props.props.displayed.displayed]);

  return (
    <View style={styles.skill}>
      <Image style={styles.skillImage} source={props.props.imguri} />
      <View style={styles.imageDivider}></View>
      <View>
        <View style={styles.percentBar}>
          <Animated.View
            style={{
              backgroundColor: "white",
              height: "100%",
              width: percentAnim,
            }}
          ></Animated.View>
        </View>
        <Text style={styles.skillText}>{props.props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  type: {
    fontFamily: "PokemonGB",
    color: "white",
    fontSize: 18,
    margin: 7,
  },
  skill: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
    marginBottom: 7,
  },
  skillImage: {
    width: 48,
    height: 48,
    backgroundColor: "#000",
    borderRadius: 24,
  },
  imageDivider: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  skillText: {
    fontFamily: "PokemonGB",
    color: "white",
    fontSize: 14,
  },
  percentBar: {
    padding: 2,
    width: 100,
    height: 14,
    borderColor: "white",
    borderWidth: 3,
    marginBottom: 7,
  },
  container: {
    maxHeight: 300,
    padding: 12,
    width: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    shadowColor: "greenyellow",
    shadowOpacity: 4.0,
    shadowRadius: 16.0,
    overflow: "visible",
    borderWidth: 1,
    borderColor: "greenyellow",
  },
});
