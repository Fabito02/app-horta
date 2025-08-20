import { View, Image, StyleSheet } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

function HortaItem({
  item,
}: {
  item: {
    id: string;
    title: string;
    image: any;
    hortalicas: string[];
    area: number;
  };
}) {
  return (
    <TouchableRipple borderless style={styles.horta} onPress={() => {}}>
      <View style={styles.hortaContent}>
        <Image source={item.image} style={styles.imagem} />
        <View style={{ width: "70%", marginVertical: 10, gap: 3 }}>
          <Text variant="labelLarge" style={{ flex: 1, fontSize: 18 }}>
            {item.title}
          </Text>
          <Text variant="bodySmall" style={{ flex: 1 }}>
            {item.hortalicas.join(", ") || "Sem hortalicas"}
          </Text>
          <Text variant="bodySmall" style={{ flex: 1 }}>
            {item.area}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
}

export default HortaItem;

const styles = StyleSheet.create({
  horta: {
    borderRadius: 20,
    width: "100%",
    backgroundColor: "#ffffff",
    elevation: 1,
    marginBottom: 30,
    paddingRight: 20,
  },
  hortaContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  imagem: {
    width: "30%",
    height: "100%",
    minHeight: 85,
  },
});
