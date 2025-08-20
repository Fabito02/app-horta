import { Tabs } from "expo-router";
import CustomTab from "@components/customTab/CustomTab";
import { Appbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import myTheme from "@/theme/theme";

export default function HomeLayout() {
  const nome = "Rancho Valente";

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: myTheme.colors.surfaceContainerLowest }}>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content title={nome}></Appbar.Content>
      </Appbar.Header>
      <View style={styles.tabs}>
        <Tabs
          screenOptions={{ headerShown: false, animation: "shift" }}
          tabBar={(props) => <CustomTab {...props} />}
        >
          <Tabs.Screen name="index" options={{ tabBarLabel: "Principal" }} />
          <Tabs.Screen name="hortas" options={{ tabBarLabel: "Hortas" }} />
          <Tabs.Screen name="ciclos" options={{ tabBarLabel: "Ciclos" }} />
        </Tabs>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: myTheme.colors.surfaceContainer },
  tabs: { flex: 1 },
});
