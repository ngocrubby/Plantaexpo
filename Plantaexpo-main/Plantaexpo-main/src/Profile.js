import { View, Text, StyleSheet, Dimensions, Image, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "./Compo/Header";
import { useNavigation } from "@react-navigation/native";
import { Appcontext } from "./Appcontext";
import QA from "./QA";
import { useDispatch, useSelector } from "react-redux";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Setting = () => {
  const { setIsLogin } = useContext(Appcontext);
  const { user } = useContext(Appcontext);
  const navigation = useNavigation();
  const { userData } = useSelector((state) => state.user);

  const gologin = () => {
    Alert.alert(
      "Xác nhận đăng xuất",
      "Bạn có chắc muốn đăng xuất?",
      [
        { text: "Huỷ", style: "cancel" },
        { text: "Đồng ý", onPress: () => setIsLogin(false) },
      ],
      { cancelable: false }
    );
  };

  const gotoeditprofile = () => {
    navigation.navigate("EditProfile");
  };
  const gototranshis = () => {
    navigation.navigate("Transactionhis");
  };
  const gotoqa = () => {
    navigation.navigate("Q&A");
  };
  return (
    <View style={styles.container}>
      <Header txt={"PROFILE"} />
      <View style={styles.view1}>
        <Image style={styles.img} source={require("../assets/img/avatar.png")} />
        <View style={styles.view2}>
          <Text>{userData.data.name}</Text>
          <Text style={[styles.txt2, { opacity: 0.5 }]}>{userData.data.email}</Text>
        </View>
      </View>
      <View style={[styles.view3, { height: height * 0.3 }]}>
        <Text style={[styles.txt1, { opacity: 0.5 }]}>Chung</Text>
        <Text onPress={() => gotoeditprofile()} style={styles.txt2}>
          Chỉnh sửa thông tin
        </Text>
        <Text style={styles.txt2}>Cẩm nang trồng cây</Text>
        <Text onPress={() => gototranshis()} style={styles.txt2}>
          Lịch sửa giao dịch
        </Text>
        <Text onPress={() => gotoqa()} style={styles.txt2}>
          Q & A
        </Text>
      </View>
      <View style={[styles.view3, { marginTop: height * 0.02, height: height * 0.25 }]}>
        <Text style={[styles.txt1, { opacity: 0.5 }]}>Bảo mật và điều khoản</Text>
        <Text style={styles.txt2}>Điều khoản và điều kiện</Text>
        <Text style={styles.txt2}>Chính sách quyền riêng tư</Text>
        <Text onPress={() => gologin()} style={[styles.txt2, { color: "#FF0000" }]}>
          Đăng xuất
        </Text>
      </View>
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  txt2: {
    fontFamily: "Lato Medium",
    paddingRight: "2%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  view3: {
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    paddingTop: height * 0.02,
    justifyContent: "space-between",
  },
  txt1: {
    fontFamily: "Lato Medium",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
  },
  view2: {
    paddingLeft: width * 0.04,
  },
  container: { backgroundColor: "white", flex: 1 },
  view1: {
    height: height * 0.15,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: width * 0.1,
  },
  img: { width: height * 0.07, height: height * 0.07 },
});
