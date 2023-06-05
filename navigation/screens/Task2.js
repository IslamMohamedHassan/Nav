import { FlatList, SafeAreaView, StyleSheet, Text, View,Platform } from "react-native";
import Box from "../../components/box";

export default function Task2() {
  const COLORS = [
    { colorName: "Base03", hexCode: "#002b36" },
    { colorName: "Base02", hexCode: "#073642" },
    { colorName: "Base01", hexCode: "#586e75" },
    { colorName: "Base00", hexCode: "#657b83" },
    { colorName: "Base0", hexCode: "#839496" },
    { colorName: "Base1", hexCode: "#93a1a1" },
    { colorName: "Base2", hexCode: "#eee8d5" },
    { colorName: "Base3", hexCode: "#fdf6e3" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Red", hexCode: "#dc322f" },
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    { colorName: "Green", hexCode: "#859900" },
  ];
  return (
    <SafeAreaView
      style={{ marginTop: Platform.OS === "android" ? 30 : 0, padding: 15 }}
    >
      <FlatList
        data={COLORS}
        renderItem={({ item }) => <Box {...item}></Box>}
        keyExtractor={(data) => data.hexCode}
      ></FlatList>
    </SafeAreaView>
  );
}

/*const styles = StyleSheet.create({
  container: {
    /*flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
