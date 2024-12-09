import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Compo/Header";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
import { useDispatch, useSelector } from "react-redux";
import { Sanpham, Sanphamdetail } from "./Reducer/ProductReducer";
import { Loai } from "./Reducer/CategoryReducer";
import { all } from "axios";
const ListPlant = (props) => {
  const { navigation } = props;
  const [onPress, setOnpress] = useState(false);
  const [Data, setData] = useState([]);
  const [Datacate, setDatacate] = useState([]);
  const dispatch = useDispatch();
  const [selectedindex, setselectedIndex] = useState("all");
  const { productData, productStatus, productdetailStatus } = useSelector((state) => state.product);
  const { categoryData, categoryStatus } = useSelector((state) => state.category);
  const gotodetail = (id) => {
    dispatch(Sanphamdetail(id));
    setOnpress(true);
  };
  useEffect(() => {
    dispatch(Sanpham());
    dispatch(Loai());
  }, []);

  useEffect(() => {
    if (categoryStatus == "succeeded") {
      if (selectedindex == "all") {
        setData(productData);
      } else {
        const findlist = productData.filter((item) => item.category._id == selectedindex);
        setData(findlist);
      }
      setDatacate([{ _id: "all", name: "Tất cả" }, ...categoryData.data]);
    }
  }, [selectedindex, categoryStatus]);
  useEffect(() => {
    if (productdetailStatus == "succeeded" && onPress) {
      navigation.navigate("Detail");
    }
  }, [productdetailStatus]);

  const chuyentien = (data) => {
    const int = parseInt(data);
    const inttovnd = int.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return inttovnd;
  };

  const renderMenu = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setselectedIndex(item._id)} activeOpacity={0.6}>
        <View
          style={[
            styles.view1,
            { backgroundColor: item._id == selectedindex ? "#009245" : "white" },
          ]}
        >
          <Text style={[styles.txt1, { color: item._id == selectedindex ? "white" : "#7D7B7B" }]}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item }) => {
    const { _id, name, type, price, image } = item;
    return (
      <TouchableOpacity style={styles.bgitem} activeOpacity={0.5} onPress={() => gotodetail(_id)}>
        <View style={styles.bgimg}>
          <Image style={{ width: "100%", height: 134 }} source={{ uri: `${image}` }} />
        </View>
        <Text style={styles.txt4}>{name}</Text>
        <Text style={styles.txt5}>{type}</Text>
        <Text style={styles.txt6}>{chuyentien(price)}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        txt="Cây trồng"
        img={require("../assets/img/cartnobg.png")}
        imgl={require("../assets/img/backnobg.png")}
      />
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <FlatList
          data={Datacate}
          renderItem={renderMenu}
          keyExtractor={(item) => item._id}
          horizontal={true}
          scrollEnabled={false}
        />
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default ListPlant;
const styles = StyleSheet.create({
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
    flexWrap: "wrap",
    fontSize: 15,
    fontFamily: "Lato Medium",
  },
  bgimg: {
    width: "100%",
    height: 134,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  bgitem: {
    width: width * 0.4,
    height: height * 0.3,
    margin: 10,
    padding: 5,
  },
  txt1: {
    // Tất cả
    fontSize: 14,
    fontFamily: "Lato Medium",
  },
  view1: {
    minWidth: 63,
    height: 38,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 4,
  },
});
var datatype = [
  {
    id: 1,
    type: "Tất cả",
  },
  { id: 2, type: "Hàng mới về" },
  { id: 3, type: "Ưa sáng" },
  { id: 4, type: "Ưa bóng" },
];
var data = [
  {
    id: 1,
    name: "Spider Plant",
    type: "Ưa bóng",
    price: "250.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 2,
    name: "Song of India",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 3,
    name: "Pink Anthurium",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 4,
    name: "Black Love Anthurium",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 5,
    name: "Black Love Anthurium",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 6,
    name: "Black Love Anthurium",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
];
