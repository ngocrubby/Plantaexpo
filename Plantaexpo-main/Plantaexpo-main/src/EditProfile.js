import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Compo/Header";
import Total from "./Compo/Total";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
import { useDispatch, useSelector } from "react-redux";
import { ChinhSua, TTuser } from "./Reducer/UserReducer";
const EditProfile = () => {
  const { userUpdate, userUpdateStatus, userData } = useSelector((state) => state.user);
  const [inputName, setInputName] = useState(userData.data.name);
  const [inputPhone, setInputPhone] = useState(userData.data.phone);
  const [inputAddress, setInputAddress] = useState(userData.data.address);
  const [onPress, setonPres] = useState(false);
  const dispatch = useDispatch();
  const sendupdate = () => {
    const body = {
      name: inputName,
      email: userData.data.email,
      phone: inputPhone,
      address: inputAddress,
    };
    dispatch(ChinhSua(body));
    setonPres(true);
    console.log("Đã gửi nd lên api chinhsua");
  };
  useEffect(() => {
    if (userUpdateStatus == "succeeded" && onPress) {
      dispatch(TTuser(userUpdate.data._id));
      ToastAndroid.show("Đã chỉnh sửa", ToastAndroid.SHORT);
    }
  }, [userUpdateStatus]);
  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{ height: height }}>
        <Total btn7={sendupdate} txt5={"Lưu thông tin"} />
        <Header txt={"Chỉnh sửa thông tin"} imgl={require("../assets/img/backnobg.png")} />
        <Image style={styles.img} source={require("../assets/img/avatar.png")} />
        <View style={{ padding: "10%" }}>
          <Text style={styles.txt1}>
            Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết để chỉnh sửa.
          </Text>
          <View style={styles.view1}>
            <TextInput
              style={styles.txt2}
              value={inputName}
              placeholder="Họ tên"
              onChangeText={(text) => setInputName(text)}
            ></TextInput>
            <Text style={[styles.txt2, { opacity: 0.5 }]}> {userData.data.email}</Text>
            <TextInput
              style={styles.txt2}
              value={inputAddress}
              placeholder="Địa chỉ"
              onChangeText={(text) => setInputAddress(text)}
            ></TextInput>
            <TextInput
              style={styles.txt2}
              value={inputPhone}
              placeholder="SĐT"
              onChangeText={(text) => setInputPhone(text)}
            ></TextInput>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    height: height * 0.3,
    marginTop: "5%",
    justifyContent: "space-between",
  },
  txt2: {
    fontFamily: "Lato Regular",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
    padding: width * 0.01,
  },
  img: {
    alignSelf: "center",
  },
  txt1: {
    fontFamily: "Lato Regular",
  },
});
