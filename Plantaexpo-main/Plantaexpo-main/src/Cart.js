import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "./Compo/Header";
import Total from "./Compo/Total";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
import { useDispatch, useSelector } from "react-redux";
import { DSGioHang, DSGioHangDel } from "./Reducer/CartReducer";
import { Sanphamdetail } from "./Reducer/ProductReducer";
import { Appcontext } from "./Appcontext";

const Cart = (props) => {
  const { navigation } = props;
  const [Data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, Settotal] = useState(0);
  const [goto, setGoto] = useState(false);
  const dispatch = useDispatch();
  const { userData, userStatus } = useSelector((state) => state.user);
  const { cartlistData, cartlistStatus, cartDelStatus, cartUpdateStatus } = useSelector(
    (state) => state.cart
  );
  const { productdetailStatus } = useSelector((state) => state.product);
  const { fromcard, setfromcard } = useContext(Appcontext);
  const gotopay = () => {
    navigation.navigate("Pay");
  };

  const gotodetail = (id) => {
    dispatch(Sanphamdetail(id));
    setGoto(true);
    setfromcard(true);
    console.log(fromcard);
  };
  useEffect(() => {
    return () => {
      setfromcard(false);
    };
  }, []);
  useEffect(() => {
    if (productdetailStatus == "succeeded" && goto) {
      navigation.navigate("Detail");
    }
  }, [productdetailStatus]);
  const delmanyitem = () => {
    const body = {
      iduser: userData.data._id,
      idproduct: selectedItems,
    };
    dispatch(DSGioHangDel(body));
  };

  //nếu xoá thành công
  useEffect(() => {
    console.log(cartDelStatus);
    Settotal(0);
  }, [cartDelStatus]);

  useEffect(() => {
    dispatch(DSGioHang(userData.data._id));
    if (cartDelStatus == "succeeded") {
      dispatch(DSGioHang(userData.data._id));
    }
  }, [cartDelStatus, cartUpdateStatus]);

  useEffect(() => {
    if (cartlistData && cartlistData.data) {
      setData(cartlistData.data.products);
    }
  }, [cartlistStatus]);

  const chuyentien = (data) => {
    const int = parseInt(data);
    const inttovnd = int.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return inttovnd;
  };
  const settotal = () => {
    let totalPrice = 0;
    Data.forEach((item) => {
      if (selectedItems.includes(item.productsId)) {
        totalPrice += parseInt(item.productprice);
      }
    });
    Settotal(totalPrice);
  };
  //
  useEffect(() => {
    settotal();
  }, [selectedItems]);
  const renderItems = ({ item }) => {
    const { productsId, productname, productimage, productcategory, productprice, quantity } = item;
    const isSelected = selectedItems.includes(productsId);
    const toggleSelectItem = (itemId) => {
      const index = selectedItems.indexOf(itemId);
      if (index !== -1) {
        console.log(selectedItems);
        const newSelectedItems = [...selectedItems];
        newSelectedItems.splice(index, 1);
        setSelectedItems(newSelectedItems);
      } else {
        setSelectedItems([...selectedItems, itemId]);
      }
    };
    return (
      <TouchableOpacity
        style={styles.view1}
        activeOpacity={0.6}
        onPress={() => gotodetail(productsId)}
      >
        <TouchableOpacity
          style={styles.touch2}
          onPress={() => {
            toggleSelectItem(productsId);
          }}
        >
          <Image
            style={styles.img1}
            source={
              isSelected
                ? require("../assets/img/checked.png")
                : require("../assets/img/noncheck.png")
            }
          />
        </TouchableOpacity>

        <View style={styles.view2}>
          <View style={{ width: 77, height: 77 }}>
            <Image
              style={{ flex: 1 }}
              source={{
                uri: `${productimage}`,
              }}
            />
          </View>
        </View>
        <View style={styles.view6}>
          <View>
            <Text style={styles.txt3}>
              {productname} | <Text style={{ color: "#7D7B7B" }}>{productcategory}</Text>
            </Text>
          </View>
          <Text style={[styles.txt3, { color: "#007537" }]}>{chuyentien(productprice)}</Text>
          <View style={styles.view3}>
            <View style={styles.view7}>
              <Text style={styles.txt1}>Số lượng: </Text>
              <Text style={styles.txt1}>{quantity}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        txt="Giỏ hàng"
        imgdel={selectedItems.length < 1 ? null : require("../assets/img/trash.png")}
        imgl={require("../assets/img/backnobg.png")}
        btn1={delmanyitem}
      />
      <View style={styles.flatlist}>
        <FlatList data={Data} keyExtractor={(item) => item._id} renderItem={renderItems} />
      </View>
      <Total txt1={"Tạm tính"} price1={chuyentien(total)} txt4={"Tiến hành thanh toán"} />
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({
  touch2: {
    //img plant
    width: width * 0.18,
    height: height * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  view7: {
    flexDirection: "row",
    alignItems: "center",
  },
  flatlist: {
    height: "70%",
  },
  txt4: {
    fontFamily: "Lato Medium",
  },
  view6: { flexDirection: "column", marginLeft: 15, width: "50%" },
  touch1: {
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: "#007537",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 8,
    paddingRight: width * 0.1,
    paddingLeft: width * 0.1,
  },
  view5: {
    width: "92%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view4: {
    position: "absolute",
    height: height * 0.15,
    padding: "2%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    bottom: 0,
    left: 0,
    right: 0,
  },
  txt3: {
    fontFamily: "Lato Medium",
  },
  txt2: {
    // Xoá
    color: "black",
    fontSize: 16,
    fontFamily: "Lato Medium",
    textDecorationLine: "underline",
    marginLeft: "6%",
    width: "50%",
    height: "100%",
    textAlign: "center",
    paddingTop: "3%",
  },
  txt1: {
    // 2
    color: "black",
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
  view2: {
    //background img
    width: 77,
    height: 77,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  img1: {
    //img plant
    width: height * 0.031,
    height: height * 0.03,
    marginLeft: "5%",
    marginRight: "7%",
  },
  view1: {
    //list item 117
    flexShrink: 1,
    height: height * 0.15,
    backgroundColor: "white",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
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
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 3,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 4,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 5,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 6,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
];
