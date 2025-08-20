import { View, Text, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";
import { TouchableRipple } from "react-native-paper";
import myTheme from "@/theme/theme";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyCustomTabBar({ state, descriptors, navigation }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const widthAnimsRef = useRef([]);
  if (widthAnimsRef.current.length !== state.routes.length) {
    widthAnimsRef.current = state.routes.map(() => new Animated.Value(60));
  }
  const widthAnims = widthAnimsRef.current;

  useEffect(() => {
    widthAnims.forEach((anim, i) => {
      Animated.timing(anim, {
        toValue: i === state.index ? 130 : 55,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  }, [state.index]);

  const handleTamanho = (index, route) => {
    if (state.index !== index) navigation.navigate(route.name);

    widthAnims.forEach((anim, i) => {
      Animated.timing(anim, {
        toValue: i === index ? 130 : 60,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });

    setExpandedIndex(index);
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: myTheme.colors.surfaceContainerLowest,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const label = descriptors[route.key].options.tabBarLabel ?? route.name;

        return (
          <TouchableRipple
            key={route.key}
            onPress={() => handleTamanho(index, route)}
            borderless
            style={{ borderRadius: 20, marginBottom: 10 }}
          >
            <Animated.View
              style={[
                {
                  height: 40,
                  backgroundColor: isFocused
                    ? myTheme.colors.primary
                    : "#00000000",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginHorizontal: 10,
                  paddingHorizontal: 12,
                },
                { width: widthAnims[index] },
              ]}
            >
              <MaterialDesignIcons
                name={
                  route.name === "index"
                    ? "home"
                    : route.name === "ciclos"
                    ? "compost"
                    : "sprout"
                }
                size={24}
                color={isFocused ? "#fff" : myTheme.colors.onSurfaceVariant}
              />
              {(expandedIndex === index || isFocused) && (
                <Text
                  style={{
                    color: "#fff",
                    marginLeft: 8,
                    flexShrink: 1,
                    overflow: "hidden",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="middle"
                >
                  {label}
                </Text>
              )}
            </Animated.View>
          </TouchableRipple>
        );
      })}
    </SafeAreaView>
  );
}
