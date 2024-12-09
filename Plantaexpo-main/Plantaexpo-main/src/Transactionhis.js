import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "./Compo/Header";
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Transactionhis = () => {
  const [data] = useState(datasp);
  const navigation = useNavigation();
  const gotodetail = () => {
    navigation.navigate("DetailTrans");
  };
  const renderitem = ({ item }) => {
    const { id, date, status, name, category, quantity, img } = item;
    return (
      <TouchableOpacity onPress={() => gotodetail()} style={styles.view1}>
        <Text style={styles.txt4}>{date}</Text>
        <View style={styles.view4}>
          <View style={styles.view2}>
            <Image style={{ width: 77, height: 77 }} source={img} />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Text
              style={{
                color: status == "Đặt hàng thành công" ? "#007537" : "#FF0000",
                fontFamily: "Lato Regular",
              }}
            >
              {status}
            </Text>
            <View>
              <Text style={styles.txt3}>
                {name} | <Text style={{ color: "#7D7B7B" }}>{category}</Text>
              </Text>
            </View>
            <Text>{quantity} sản phẩm</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.containter}>
      <Header txt={"Lịch sử giao dịch"} imgl={require("../assets/img/backnobg.png")} />
      <FlatList
        data={data}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
};

export default Transactionhis;
const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatlist: {
    flex: 1,
  },
  view4: {
    flexDirection: "row",
  },
  txt4: {
    borderBottomWidth: 1,
    borderBottomColor: "#7D7B7B",
    fontFamily: "Lato Medium",
    marginBottom: height * 0.02,
    padding: "2%",
  },

  view1: {
    //list item 117
    flexShrink: 1,
    minHeight: height * 0.15,
    backgroundColor: "white",
    marginLeft: width * 0.08,
    marginRight: width * 0.08,
    marginTop: height * 0.02,
    justifyContent: "flex-start",
  },
  view2: {
    //background img
    width: 77,
    height: 77,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  txt3: {
    fontFamily: "Lato Medium",
  },
  view3: {
    //tang giam xoa
    width: "68%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "space-between",
  },
  img1: {
    //img plant
    width: height * 0.037,
    height: height * 0.036,
    marginLeft: 23,
    marginRight: 25,
  },
});
var datasp = [
  {
    id: 1,
    date: "Thứ tư, 09/09/2021",
    status: "Đặt hàng thành công",
    name: "Sipder Plant",
    category: "Ưa bóng",
    quantity: "2",
    img: require("../assets/img/item.png"),
  },
  {
    id: 2,
    date: "Thứ tư, 09/09/2021",
    status: "Đã huỷ đơn hàng",
    name: "Sipder Plant",
    category: "Ưa bóng",
    quantity: "3",
    img: require("../assets/img/item.png"),
  },
];
