import { View, StyleSheet, Image } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";
import myTheme from "@/theme/theme";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  hortas: undefined;
};

export default function Principal() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffffff" }}>
      <View style={styles.clima}></View>
      <View style={styles.container}>
        <Text
          variant="displaySmall"
          style={{
            textAlign: "center",
            fontSize: 25,
            marginBottom: 20,
            paddingHorizontal: 20,
          }}
        >
          Gerencie suas hortas
        </Text>
        <View style={styles.opcoes}>
          <TouchableRipple
            style={styles.opcao}
            borderless
            onPress={() => navigation.navigate("hortas")}
          >
            <View style={styles.opcaoContent}>
              <Image
                source={require("@assets/opcoes-home/horta.jpg")}
                style={styles.imagem}
              />
              <Text variant="labelLarge">Minhas Hortas</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple borderless onPress={() => {}} style={styles.opcao}>
            <View style={styles.opcaoContent}>
              <Image
                source={require("@assets/opcoes-home/culturas.jpg")}
                style={styles.imagem}
              />
              <Text variant="labelLarge">Culturas</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple borderless onPress={() => {}} style={styles.opcao}>
            <View style={styles.opcaoContent}>
              <Image
                source={require("@assets/opcoes-home/producao.jpg")}
                style={styles.imagem}
              />
              <Text variant="labelLarge">Produção</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple borderless onPress={() => {}} style={styles.opcao}>
            <View style={styles.opcaoContent}>
              <Image
                source={require("@assets/opcoes-home/balanco.jpg")}
                style={styles.imagem}
              />
              <Text variant="labelLarge">Balanço</Text>
            </View>
          </TouchableRipple>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingBottom: 40,
    backgroundColor: myTheme.colors.surfaceContainerLow,
    width: "100%",
  },
  opcoes: {
    flexDirection: "row",
    flex: 1,
    gap: 30,
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
  },
  clima: {
    height: 150,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  opcao: {
    paddingBottom: 12,
    borderRadius: 20,
    width: "44%",
    backgroundColor: "#ffffff",
    elevation: 1,
  },
  opcaoContent: {
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  imagem: {
    width: "100%",
    height: 70,
  },
});
