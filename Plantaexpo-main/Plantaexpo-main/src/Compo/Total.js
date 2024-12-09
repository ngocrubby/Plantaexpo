import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Total = (
  { txt1, price1, txt2, price2, txt3, price3, txt4, txt5, txt6, btn6, btn7 },
  props
) => {
  const navigation = useNavigation();
  const gotopay = () => {
    navigation.navigate("Pay");
  };
  return (
    <View style={[styles.view4, { minHeight: txt4 ? height * 0.15 : height * 0.1 }]}>
      {!!txt1 && (
        <View style={styles.view5}>
          <Text style={[styles.txt4, { opacity: 0.5 }]}>{txt1}</Text>
          <Text style={[styles.txt4]}>{price1}</Text>
        </View>
      )}
      {!!txt2 && (
        <View style={styles.view5}>
          <Text style={[styles.txt4, { opacity: 0.5 }]}>{txt2}</Text>
          <Text style={[styles.txt4]}>{price2}</Text>
        </View>
      )}
      {!!txt3 && (
        <View style={styles.view5}>
          <Text style={[styles.txt4, { opacity: 0.5 }]}>{txt3}</Text>
          <Text style={[styles.txt4, { color: "#007537" }]}>{price3}</Text>
        </View>
      )}
      {!!txt4 && (
        <TouchableOpacity style={styles.touch1} activeOpacity={0.5} onPress={() => gotopay()}>
          <Text style={[styles.txt4, { color: "white", fontSize: 16 }]}>{txt4}</Text>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/img/rightwhite.png")}
          />
        </TouchableOpacity>
      )}
      {!!txt5 && (
        <TouchableOpacity style={styles.touch2} activeOpacity={0.5} onPress={btn7}>
          <Text style={[styles.txt4, { color: "white", fontSize: 16 }]}>{txt5}</Text>
        </TouchableOpacity>
      )}
      {!!txt6 && (
        <Text onPress={btn6} style={styles.txt7}>
          {txt6}
        </Text>
      )}
    </View>
  );
};

export default Total;
const styles = StyleSheet.create({
  txt7: {
    fontFamily: "Lato Regular",
    textDecorationLine: "underline",
    fontSize: 15,
    padding: "3%",
  },
  view4: {
    position: "absolute",
    padding: "2%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    bottom: 0,
    left: 0,
    right: 0,
  },
  view5: {
    width: "92%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "2%",
  },
  txt4: {
    fontFamily: "Lato Medium",
  },
  touch1: {
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: "#007537",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 8,
    paddingRight: width * 0.1,
    paddingLeft: width * 0.1,
  },
  touch2: {
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: "#007537",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 8,
    paddingRight: width * 0.1,
    paddingLeft: width * 0.1,
  },
});
