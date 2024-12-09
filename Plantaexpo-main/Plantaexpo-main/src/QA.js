import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Compo/Header";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const QA = () => {
  const [Data] = useState(data);
  const rotaZ = useSharedValue(-90);
  const rotaZ2 = useSharedValue(-90);
  const [selectedindex, setselectedIndex] = useState("");

  const imgStyle = useAnimatedStyle(() => {
    return {
      width: 28,
      height: 28,
      transform: [{ rotateZ: `${rotaZ.value}deg` }],
    };
  });

  const imgStyle2 = useAnimatedStyle(() => {
    return {
      width: 28,
      height: 28,
      transform: [{ rotateZ: `${rotaZ2.value}deg` }],
    };
  });

  const renderItem = ({ item }) => {
    const { id, question, answer } = item;
    const select = () => {
      if (selectedindex == id) {
        setselectedIndex("");
      } else {
        setselectedIndex(id);
      }
    };
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => select()} style={styles.touch1}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txt1}>{question}</Text>
          <Animated.Image
            style={[
              styles.img1,
              { transform: id == selectedindex ? [{ rotateZ: `90deg` }] : [{ rotateZ: `-90deg` }] },
            ]}
            source={require("../assets/img/backnobg.png")}
          />
        </View>
        {id == selectedindex ? <Text style={styles.txt2}>{answer}</Text> : null}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header txt="Q & A" imgl={require("../assets/img/backnobg.png")} />
      <View style={{ padding: "5%" }}>
        <FlatList data={Data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </View>
  );
};

export default QA;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  touch1: {
    width: width,
    padding: "2%",
  },
  txt1: {
    width: "80%",
    fontFamily: "Lato Regular",
    fontSize: 16,
  },
  txt2: {
    width: "85%",
    fontFamily: "Lato Regular",
    minHeight: height * 0.02,
    fontSize: 16,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.02,
  },
  img1: {
    width: 24,
    height: 24,
  },
});
const data = [
  {
    id: 1,
    question: "Tôi trộn các chất dinh dưỡng theo thứ tự nào?",
    answer:
      "A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.",
  },
  {
    id: 2,
    question: "Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?",
    answer:
      "Dinh dưỡng cao cấp nên ko có hạn sử dụng, chỉ cần bảo quản tốt dưới nhiệt độ mát, tránh ánh sáng trực tiếp là sẽ để được rất lâu, Để duy trì mức dinh dưỡng tối ưu, chúng tôi khuyên bạn nên thay đổi hồ chứa thuỷ canh của bạn sau mỗi 7 ngày, còn với thổ canh thì pha lần nào tưới lần đó, thừa thì bỏ lần sau pha mới. Đặc biệt có vi sinh Mycorrhizae có hạn sử dụng sau 2 năm kể từ ngày mua.",
  },
  {
    id: 3,
    question: "Khi nào tôi thêm bộ điều chỉnh pH?",
    answer:
      "Sau khi bạn thêm A-F nhưng trước khi bạn thêm line E Root Igniter vào thì phải căn chỉnh pH trước rồi. PH tối ưu là giữa 5,8-6,3, nấm rễ phát triển tốt hơn khi pH chuẩn, dinh dưỡng đủ. Bạn cần thêm 1 số công cụ bút đo nữa nhé.",
  },
  {
    id: 4,
    question: "Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Elite không?",
    answer:
      "Không. Chúng tôi không sử dụng bất kỳ chất điều chỉnh tăng trưởng nào trong dòng Nutrient của mình. Điều này bao gồm Paclobutrazol và Daminozide, được chứng minh là có ảnh hưởng tiêu cực đến sức khỏe khi con người ăn phải, đặc biệt là Ung Thư.",
  },
  {
    id: 5,
    question: "Các sản phẩm Planta có phải là hữu cơ không?",
    answer:
      "Các sản phẩm dinh dưỡng của chúng tôi là sự pha trộn của tất cả các thành phần hữu cơ và vô cơ tự nhiên, không chứa hormone, nước hoa, thuốc nhuộm hoặc chất điều hòa tăng trưởng. Chúng đã được thiết kế đặc biệt để tối đa hóa khả dụng sinh học của các chất dinh dưỡng để hấp thụ và hiệu quả tối ưu. Chúng tôi hiểu được sự hấp thụ của một khu vườn hữu cơ. Quan trọng hơn, độ chính xác như vậy mang lại kết quả vượt trội với một giải pháp hoàn toàn hữu cơ. Chúng tôi tiếp tục phát triển các sản phẩm hữu cơ để thử nghiệm và sẽ cung cấp cho các thị trường dựa trên những kết quả chúng tôi thu thập được .",
  },
];
