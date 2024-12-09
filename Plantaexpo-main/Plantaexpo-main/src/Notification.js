import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Compo/Header";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Header txt={"Thông báo"} imgl={require("../assets/img/backnobg.png")} />
      <Text style={styles.txt1}>Hiện chưa có thông báo nào dành cho bạn</Text>
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  txt1: {
    fontFamily: "Lato Medium",
    alignSelf: "center",
    marginTop: "1%",
  },
});
