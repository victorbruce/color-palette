import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPallete = ({ route }) => {
  const { colors } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.colorName}
        data={colors}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "white"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10
  }
});

export default ColorPallete;
