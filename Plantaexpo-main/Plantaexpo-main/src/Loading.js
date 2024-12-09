import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { Sever } from "./Reducer/StartReducer";
import { useDispatch, useSelector } from "react-redux";

const Loading = (props) => {
  const { SeverInfo, SeverStatus } = useSelector((state) => state.sever);
  const { navigation } = props;
  const dispatch = useDispatch();
  setTimeout(() => {}, 1000);
  useEffect(() => {
    console.log(SeverStatus);
    dispatch(Sever());
  }, []);
  useEffect(() => {
    if (SeverStatus == "succeeded") {
      setTimeout(() => {
        navigation.navigate("Login");
      }, 1000);
    }
  }, [SeverStatus]);
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Planta</Text>
      <Image style={styles.loading} source={require("../assets/img/loading.gif")} />
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007537",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "#fff",
    fontFamily: "Lato Black",
    fontSize: 50,
  },
  loading: {
    width: "10%",
    height: "5%",
  },
});
