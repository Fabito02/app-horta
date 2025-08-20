import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { useRouter } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import myTheme from "@/theme/theme";

const Login = () => {
  const ModalInicialRef = useRef(null);
  const ModalLoginRef = useRef(null);

  const router = useRouter();

  const snapPoints = useMemo(() => ["50%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleLogin = useCallback(() => {
    ModalInicialRef.current?.close();
    ModalLoginRef.current?.present();
  }, []);

  const [text, setText] = React.useState("");

  useEffect(() => {
    ModalInicialRef.current?.present();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Image
          source={require("@assets/background.png")}
          style={styles.image}
        />

        <BottomSheetModal
          ref={ModalInicialRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          enableContentPanningGesture={false}
          onChange={handleSheetChanges}
          backgroundStyle={{
            borderTopLeftRadius: 48,
            borderTopRightRadius: 48,
            backgroundColor: myTheme.colors.surfaceContainerLowest,
          }}
          handleComponent={null}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={styles.content}>
              <View>
                <Text variant="titleSmall" style={styles.title}>
                  A melhor maneira de organizar suas hortas
                </Text>
                <Text style={styles.text}>
                  Organizaremos e dimensionaremos sua horta e produção
                </Text>
              </View>
              <Button
                onPress={handleLogin}
                style={styles.button}
                mode="contained"
              >
                Começar
              </Button>
            </View>
          </BottomSheetView>
        </BottomSheetModal>

        <BottomSheetModal
          ref={ModalLoginRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          enableContentPanningGesture={true}
          onChange={handleSheetChanges}
          backgroundStyle={{
            borderTopLeftRadius: 48,
            borderTopRightRadius: 48,
            backgroundColor: myTheme.colors.surfaceContainerLowest,
          }}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={styles.content}>
              <View>
                <Text variant="titleSmall" style={styles.title}>
                  Bem-vindo!
                </Text>
                <Text style={styles.text}>
                  Insira suas credenciais para entrar no sistema
                </Text>
                <View style={{ marginTop: 32 }}>
                  <TextInput
                    label="Email"
                    right={<TextInput.Icon icon="email" />}
                    contentStyle={{
                      borderRadius: 14,
                      
                    }}
                  />
                  <TextInput
                    label="Senha"
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" />}
                  />
                </View>
                <Button
                  onPress={() => router.push("/home")}
                  style={styles.button}
                  mode="contained"
                >
                  Entrar
                </Button>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 26,
                  }}
                >
                  <Button
                    mode="contained"
                    buttonColor={myTheme.colors.surfaceContainerLowest}
                    elevation={5}
                    onPress={() => {}}
                  >
                    <Image
                      source={require("@assets/google.png")}
                      style={{
                        marginTop: 16,
                        width: 32,
                        height: 32,
                      }}
                    />
                  </Button>
                  <Text style={{ marginTop: 16 }}>Não tenho cadastro</Text>
                </View>
                <View style={{ marginTop: 10 }} />
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" },
  contentContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: { fontSize: 32, fontFamily: "PoppinsSemiBold", textAlign: "center" },
  text: { textAlign: "center", marginTop: 16 },
  button: { marginTop: 32, borderRadius: 14 },
});

export default Login;
