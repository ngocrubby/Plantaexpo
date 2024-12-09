import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Header = ({ txt, img, imgdel, imgl, btn1, btn2 }, props) => {
  const navigation = useNavigation();
  const gotocart = () => {
    navigation.navigate("Cart");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>{txt}</Text>
      <TouchableOpacity style={styles.img1} onPress={() => navigation.goBack()} activeOpacity={0.5}>
        <Image style={{ width: 28, height: 28 }} source={imgl} />
      </TouchableOpacity>
      {!!img && (
        <TouchableOpacity style={styles.img2} activeOpacity={0.5} onPress={() => gotocart()}>
          <Image style={{ width: 26, height: 26 }} source={img} />
        </TouchableOpacity>
      )}
      {!!imgdel && (
        <TouchableOpacity style={styles.img2} activeOpacity={0.5} onPress={btn1}>
          <Image style={{ width: 26, height: 26 }} source={imgdel} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: height * 0.095,
  },
  txt1: {
    // Spider Plant
    alignSelf: "center",
    color: "#221F1F",
    fontSize: 18,
    width: "70%",
    height: "80%",
    flexWrap: "wrap",
    fontFamily: "Lato Medium",
    marginTop: height * 0.055,
    textAlign: "center",
  },
  img1: {
    //back
    position: "absolute",
    top: height * 0.055,
    left: 20,
    width: 28,
    height: 28,
  },
  img2: {
    //cart
    position: "absolute",
    right: 20,
    top: height * 0.055,
    width: 26,
    height: 26,
  },
});
