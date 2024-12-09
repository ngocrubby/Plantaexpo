import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
import { useDispatch, useSelector } from "react-redux";
import { DangKyTaiKhoan } from "./Reducer/UserReducer";

const Reg = (props) => {
  const { navigation } = props;
  const [hoten, Sethoten] = useState("");
  const [username, Setusername] = useState("");
  const [sdt, setSdt] = useState("");
  const [password, Setpassword] = useState("");
  const [titleerror, Settitleerror] = useState("");
  const [showpass, setShowpass] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const dispatch = useDispatch();
  const { registerData, registerStatus } = useSelector((state) => state.user);

  const showpassword = () => {
    setShowpass(!showpass);
  };
  const checkdata = () => {
    if (hoten == "" || username == "" || password == "" || sdt == "") {
      Settitleerror("Không được bỏ trống!");
    } else {
      checkreg();
      setIsRegistered(true);
    }
  };
  useEffect(() => {
    console.log(registerStatus);
    if (registerStatus == "succeeded" && isRegistered) {
      if (registerData.data == null) {
        Alert.alert("Email tồn tại");
      } else {
        goback();
      }
    }
    console.log(`tình trạng đăng kí: ${registerStatus}`);
  }, [registerStatus]);
  const checkreg = () => {
    const body = {
      name: hoten,
      email: username,
      phone: sdt,
      password: password,
    };
    dispatch(DangKyTaiKhoan(body));
    console.log("đang gửi yếu cầu đk..");
  };
  const goback = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Image style={styles.logo} source={require("../assets/img/Ellipse.png")} />
      <TouchableOpacity style={styles.back} activeOpacity={0.8} onPress={() => goback()}>
        <Image style={{ borderRadius: 99 }} source={require("../assets/img/back.png")} />
      </TouchableOpacity>
      <View>
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={styles.txtwelcome}>Đăng kí</Text>
          <Text style={styles.txtdn}>Tạo tài khoản</Text>
          <View
            style={[
              styles.inputpass,
              {
                borderColor: titleerror && !hoten ? "#CE0000" : "#8B8B8B",
              },
            ]}
          >
            <TextInput
              style={{ width: "90%", height: "90%" }}
              placeholder="Họ tên"
              onChangeText={(data) => {
                Sethoten(data);
                Settitleerror("");
              }}
            />
          </View>
          <View
            style={[
              styles.inputpass,
              {
                borderColor: titleerror && !username ? "#CE0000" : "#8B8B8B",
              },
            ]}
          >
            <TextInput
              style={{ width: "90%", height: "90%" }}
              placeholder="Email"
              onChangeText={(data) => {
                Setusername(data);
                Settitleerror("");
              }}
            />
          </View>
          <View
            style={[
              styles.inputpass,
              {
                borderColor: titleerror && !sdt ? "#CE0000" : "#8B8B8B",
              },
            ]}
          >
            <TextInput
              style={{ width: "90%", height: "90%" }}
              placeholder="Số điện thoại"
              keyboardType="phone-pad"
              onChangeText={(data) => {
                setSdt(data);
                Settitleerror("");
              }}
            />
          </View>
          <View
            style={[
              styles.inputpass,
              {
                borderColor: titleerror && !password ? "#CE0000" : "#8B8B8B",
              },
            ]}
          >
            <TextInput
              style={{ width: "85%", height: "90%" }}
              placeholder="Mật khẩu"
              secureTextEntry={showpass == false ? true : false}
              onChangeText={(data) => {
                Setpassword(data);
                Settitleerror("");
              }}
            />
            <TouchableOpacity style={{ padding: "5%" }} activeOpacity={0.8} onPress={showpassword}>
              <Image
                style={{ width: 30, height: 25 }}
                source={
                  showpass == false
                    ? require("../assets/img/eye_off.png")
                    : require("../assets/img/eye_on.png")
                }
              />
            </TouchableOpacity>
          </View>
          {!!titleerror && <Text style={styles.txt1}>Không được bỏ trống!</Text>}
          <Text style={styles.txtagre}>
            Để đăng ký tài khoản, bạn đồng ý{" "}
            <Text style={{ color: "#009245", textDecorationLine: "underline" }}>
              Terms & Conditions
            </Text>{" "}
            and{" "}
            <Text style={{ color: "#009245", textDecorationLine: "underline" }}>
              Privacy Policy
            </Text>
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => checkdata()}>
            <LinearGradient
              colors={["#007537", "#4CAF50"]}
              style={styles.btn}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.btndn}>Đăng kí</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.lineor}>
            <LinearGradient
              style={styles.line}
              colors={["#007537", "#4CAF50"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text></Text>
            </LinearGradient>
            <Text style={styles.or}>Hoặc</Text>
            <LinearGradient
              style={styles.line}
              colors={["#007537", "#4CAF50"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text></Text>
            </LinearGradient>
          </View>
          <View style={styles.morelogin}>
            <Image style={{ width: 32, height: 32 }} source={require("../assets/img/gg.png")} />
            <Image style={{ width: 32, height: 32 }} source={require("../assets/img/fb.png")} />
          </View>
          <Text style={[styles.txtdk, { color: "black" }]} onPress={() => goback()}>
            Tôi đã có tài khoản <Text style={[styles.txtdk, { color: "#009245" }]}>Đăng nhập</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Reg;

const styles = StyleSheet.create({
  touch: {
    padding: "2%",
  },
  txt1: {
    color: "#CE0000",
    fontSize: 14,
    fontFamily: "DesignerVN-Poppins-Regular",
  },
  txtagre: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "DesignerVN-Poppins-Regular",
  },
  or: {
    marginLeft: 10,
    marginRight: 10,
    color: "black",
    fontFamily: "DesignerVN-Poppins-Regular",
  },
  txtdk: {
    // Tạo tài khoán
    marginTop: height >= 712 ? height * 0.02 : height * 0.02,
    fontFamily: "DesignerVN-Poppins-Regular",
    alignSelf: "center",
  },
  morelogin: {
    alignSelf: "center",
    width: "60%",
    flexDirection: "row",
    marginTop: height >= 712 ? height * 0.02 : height * 0.002,
    justifyContent: "space-around",
  },
  btndn: {
    // Đăng nhập
    color: "white",
    fontSize: 20,
    fontFamily: "DesignerVN-Poppins-ExtraBold",
  },
  btn: {
    width: "100%",
    height: height >= 712 ? height * 0.07 : height * 0.06,
    marginTop: height * 0.02,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 21,
  },

  inputpass: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 14,
    paddingRight: 10,
    marginBottom: 10,
    height: height * 0.065,
  },
  input: {
    borderWidth: 1,
    borderColor: "#8B8B8B",
    padding: 14,
    borderRadius: 10,
  },
  txtdn: {
    // Đăng nhập tài khoản
    color: "black",
    fontSize: 18,
    fontFamily: "DesignerVN-Poppins-Regular",
    alignSelf: "center",
    marginBottom: height >= 712 ? height * 0.04 : height * 0.001,
  },
  back: {
    marginTop: height * 0.06,
    marginLeft: height * 0.02,
    position: "absolute",
    zIndex: 1,
    width: 32,
    height: 32,
  },
  txtwelcome: {
    // Chào mừng bạn
    color: "black",
    fontSize: 30,
    fontFamily: "DesignerVN-Poppins-ExtraBold",
    alignSelf: "center",
    marginTop: -30,
  },
  lineor: {
    width: "100%",
    marginTop: height >= 712 ? height * 0.01 : height * 0.001,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  line: {
    width: width * 0.3,
    height: 2,
  },
  logo: {
    resizeMode: "cover",
    width: "100%",
    height: height * 0.5,
    marginTop: height >= 712 ? -height / 4 : -height / 3.5,
  },
});
