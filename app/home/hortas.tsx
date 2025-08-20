import { View, StyleSheet, FlatList } from "react-native";
import myTheme from "@/theme/theme";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HortaItem from "@/components/HortaItem";

type RootStackParamList = {
  hortas: undefined;
};

export default function Hortas() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const hortasData = [
    {
      id: "1",
      title: "Horta 1",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "2",
      title: "Horta 2",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "3",
      title: "Horta 3",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "4",
      title: "Horta 4",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "5",
      title: "Horta 5",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "6",
      title: "Horta 6",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "7",
      title: "Horta 7",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "8",
      title: "Horta 8",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "9",
      title: "Horta 9",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
    {
      id: "10",
      title: "Horta 10",
      image: require("@assets/opcoes-home/horta.jpg"),
      hortalicas: ["Alface", "Coentro", "Salsa", "Orégano"],
      area: 100,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffffff" }}>
      <View style={styles.container}>
          <FlatList
            data={hortasData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <HortaItem item={item} />}
            showsVerticalScrollIndicator={false}
            numColumns={1}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: myTheme.colors.surfaceContainerLow,
    width: "100%",
  },
});
