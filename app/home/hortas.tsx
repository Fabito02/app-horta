import {
  View,
  StyleSheet,
  FlatList,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import myTheme from "@/theme/theme";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HortaItem from "@/components/HortaItem";
import { AnimatedFAB } from "react-native-paper";
import { useState } from "react";

type RootStackParamList = {
  hortas: undefined;
};

type HortasProps = {
  visible: boolean;
  animateFrom: "right" | "left";
  style?: object;
};

export default function Hortas({ visible, animateFrom, style }: HortasProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isExtended, setIsExtended] = useState(true);

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

  const fabStyle = { [animateFrom]: 16 };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(event.nativeEvent.contentOffset.y) ?? 0;
    setIsExtended(currentScrollPosition <= 0);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: myTheme.colors.surfaceContainerLowest,
      }}
    >
      <View style={styles.container}>
        <FlatList
          data={hortasData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HortaItem item={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          onScroll={onScroll}
          scrollEventThrottle={16}
        />
      </View>
      <AnimatedFAB
        icon={"plus"}
        label={"Nova Horta"}
        extended={isExtended}
        onPress={() => console.log("Pressed")}
        visible={visible}
        animateFrom={animateFrom}
        iconMode={"static"}
        style={[styles.fabStyle, style, fabStyle]}
      />
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
    backgroundColor: myTheme.colors.surfaceContainer,
    width: "100%",
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
});
