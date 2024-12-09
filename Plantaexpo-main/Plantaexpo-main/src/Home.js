import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sanpham, Sanphamdetail } from "./Reducer/ProductReducer";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Home = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { productData, productStatus, productdetailData, productdetailStatus } = useSelector(
    (state) => state.product
  );

  const gotodetail = (id) => {
    dispatch(Sanphamdetail(id));
    console.log(id);
  };
  const golistplant = () => {
    navigation.navigate("ListPlant");
  };
  const gotocart = () => {
    navigation.navigate("Cart");
  };

  useEffect(() => {
    dispatch(Sanpham());
  }, []);

  useEffect(() => {
    if (productdetailStatus == "succeeded") {
      navigation.navigate("Detail");
    }
  }, [productdetailStatus]);

  const chuyentien = (data) => {
    const gia = parseInt(data);
    const inttovnd = gia.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return inttovnd;
  };

  const renderItem = ({ item }) => {
    const { _id, name, category, price, image } = item;
    return (
      <TouchableOpacity style={styles.bgitem} activeOpacity={0.5} onPress={() => gotodetail(_id)}>
        <View style={styles.bgimg}>
          <Image
            style={{ flex: 1 }}
            source={{
              uri: `${image}`,
            }}
          />
        </View>
        <Text style={styles.txt4}>{name}</Text>
        <Text style={styles.txt5}>{category.name}</Text>
        <Text style={styles.txt6}>{chuyentien(price)}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ backgroundColor: "#F6F6F6" }}>
        <TouchableOpacity style={styles.cart} activeOpacity={0.5} onPress={() => gotocart()}>
          <Image style={{ width: 48, height: 46 }} source={require("../assets/img/cart.png")} />
        </TouchableOpacity>
        <Text style={styles.txt1}>Planta - toả sáng không gian nhà bạn</Text>
        <Text style={styles.txt2} onPress={() => golistplant()}>
          Xem hàng mới về
          <Image style={{ width: 24, height: 24 }} source={require("../assets/img/right.png")} />
        </Text>
        <Image style={styles.homebg} source={require("../assets/img/homebg.png")} />
      </View>

      <View style={{ padding: 20 }}>
        <Text style={styles.txt3}>Cây trồng </Text>
      </View>

      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.FlatList}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  bgimg: {
    width: "100%",
    height: 134,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  txt6: {
    // 250.000đ
    color: "#007537",
    fontSize: 16,
    fontFamily: "Lato Medium",
  },
  txt5: {
    color: "#7D7B7B",
    fontSize: 14,
    fontFamily: "Lato Medium",
  },
  txt4: {
    marginTop: 5,
    color: "#221F1F",
    fontSize: 16,
    fontFamily: "Lato Medium",
  },
  FlatList: {
    alignSelf: "center",
  },
  bgitem: {
    width: width * 0.4,
    minHeight: height * 0.3,
    margin: 10,
    padding: 5,
    justifyContent: "space-between",
  },
  txt3: {
    // Cây trồng
    color: "#221F1F",
    fontSize: 24,
    fontFamily: "Lato Medium",
  },
  txt2: {
    // Xem hàng mới về
    position: "absolute",
    zIndex: 1,
    color: "#007537",
    fontSize: 16,
    top: 105,
    left: 20,
    fontFamily: "Lato Medium",
  },
  txt1: {
    // Planta - toả sáng không gian nhà bạn
    position: "absolute",
    zIndex: 1,
    top: 41,
    width: 223,
    minHeight: 233,
    color: "#221F1F",
    fontSize: 24,
    fontFamily: "Lato Medium",
    left: 20,
  },
  homebg: {
    width: "100%",
    height: height >= 712 ? height * 0.3 : height * 0.3,
    marginTop: 60,
  },
  cart: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
    width: 48,
    height: 46,
  },
});
