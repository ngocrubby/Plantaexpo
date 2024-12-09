import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect } from "react";
import Header from "./Compo/Header";
import Total from "./Compo/Total";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
import { useDispatch, useSelector } from "react-redux";
import { addlichsu } from "./Reducer/BillReducer";
const Pay = () => {
  const dispatch = useDispatch();
  const { billAddData, billAddStatus } = useSelector((state) => state.bill);
  const { loginData, loginStatus } = useSelector((state) => state.user);
  const bill = () => {
    const body = {
      iduser: loginData.data._id,
    };
    dispatch(addlichsu(body));
  };
  useEffect(() => {
    console.log(billAddStatus);
  }, [billAddStatus]);
  return (
    <View style={styles.container}>
      <Header txt="Thanh toán" imgl={require("../assets/img/backnobg.png")} />
      <View style={{ height: "70%" }}>
        <ScrollView overScrollMode="never">
          <View style={styles.view1}>
            <Text style={styles.txt3}>Thông tin khách hàng</Text>
            <TextInput style={styles.txt1} placeholder="Nguyen le hung"></TextInput>
            <TextInput style={styles.txt1} placeholder="hn123@gmail.com"></TextInput>
            <TextInput style={styles.txt1} placeholder="Địa chỉ"></TextInput>
            <TextInput style={styles.txt1} placeholder="Số điện thoại"></TextInput>
          </View>
          <View style={styles.view2}>
            <Text style={styles.txt3}>Phương thức vận chuyển</Text>
            <View style={styles.view3}>
              <View>
                <Text style={[styles.txt2, { color: "#007537" }]}>Giao hàng nhanh -00.000đ</Text>
                <Text style={[styles.txt2, { opacity: 0.5 }]}>Dự kiến giao hàng day-day/month</Text>
              </View>
              <Image style={styles.img1} source={require("../assets/img/checkgreen.png")} />
            </View>
            <View style={styles.view3}>
              <View>
                <Text style={[styles.txt2]}>Giao hàng COD -00.000đ</Text>
                <Text style={[styles.txt2, { opacity: 0.5 }]}>Dự kiến giao hàng day-day/month</Text>
              </View>
            </View>
          </View>
          <View style={styles.view2}>
            <Text style={styles.txt3}>Phương thức thanh toán</Text>
            <View style={styles.view3}>
              <Text style={[styles.txt2, { color: "#007537" }]}>Thẻ VISA/MASTERCARD</Text>
              <Image style={styles.img1} source={require("../assets/img/checkgreen.png")} />
            </View>
            <View style={styles.view3}>
              <Text style={styles.txt2}>Thẻ ATM</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Total
        txt1={"Tạm tính"}
        txt2={"Phí vận chuyển"}
        txt3={"Tổng cộng"}
        price1={"000.000đ"}
        price2={"00.000đ"}
        price3={"000.000đ"}
        txt5={"Tiếp tục"}
        btn7={() => bill()}
      />
    </View>
  );
};

export default Pay;
const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  img1: {
    width: height * 0.04,
    height: height * 0.04,
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
    justifyContent: "space-between",
    height: height * 0.2,
    paddingLeft: width * 0.07,
    paddingRight: width * 0.07,
    marginBottom: height * 0.04,
  },
  view3: {
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
    padding: width * 0.01,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt1: {
    fontFamily: "Lato Regular",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
    padding: width * 0.01,
  },
});
