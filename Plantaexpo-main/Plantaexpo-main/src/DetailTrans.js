import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import Header from "./Compo/Header";
import Total from "./Compo/Total";
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const DetailTrans = () => {
  const navigation = useNavigation();
    const gohome = () => {
      navigation.navigate("Home");
    };
  return (
    <View style={styles.container}>
      <Header txt="Lịch sử giao dịch" imgl={require("../assets/img/backnobg.png")} />
      <View style={{ height: "80%" }}>
        <Text style={styles.txt6}>Bạn đã đặt hàng thành công</Text>
        <Text style={styles.txt6}> 03/09/2021</Text>
        <ScrollView overScrollMode="never">
          <View style={styles.view1}>
            <Text style={styles.txt3}>Thông tin khách hàng</Text>
            <Text style={styles.txt1}>Nguyen le hung</Text>
            <Text style={styles.txt1}>hn123@gmail.com</Text>
            <Text style={styles.txt1}>Địa chỉ</Text>
            <Text style={styles.txt1}>Số điện thoại</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.txt3}>Phương thức vận chuyển</Text>
            <View style={styles.view3}>
              <View>
                <Text style={[styles.txt2]}>Giao hàng nhanh -00.000đ</Text>
                <Text style={[styles.txt2]}>Dự kiến giao hàng day-day/month</Text>
              </View>
            </View>
          </View>
          <View style={styles.view2}>
            <Text style={styles.txt3}>Phương thức thanh toán</Text>
            <View style={styles.view3}>
              <Text style={[styles.txt2]}>Thẻ VISA/MASTERCARD</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Total
        txt1={"Tổng cộng"}
        price1={"000.000đ"}
        txt5={"Xem Cẩm nang trồng cây"}
        txt6={"Quay về trang chủ"}
        btn6={()=>gohome()}
      />
    </View>
  );
};

export default DetailTrans;
const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  img1: {
    width: height * 0.04,
    height: height * 0.04,
  },
  txt6: {
    alignSelf: "center",
    fontFamily: "Lato Regular",
    color: "#007537",
  },
  txt2: {
    fontFamily: "Lato Regular",
  },
  txt3: {
    fontFamily: "Lato Black",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
    padding: width * 0.01,
    opacity: 0.7,
  },
  view1: {
    //thông tin khách hàng
    justifyContent: "space-between",
    height: height * 0.35,
    padding: width * 0.07,
  },
  view2: {
    //phương thức vận chuyển
    height: height * 0.15,
    paddingLeft: width * 0.07,
    paddingRight: width * 0.07,
  },
  view3: {
    opacity: 0.5,
    padding: width * 0.01,
    flexDirection: "row",
    marginTop: height * 0.02,
  },
  txt1: {
    fontFamily: "Lato Regular",
    opacity: 0.5,
    padding: width * 0.01,
  },
});
