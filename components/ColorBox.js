import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, hexCode }) => {
  const textColor = {
    color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
  }
  return (
    <View style={[styles.colorBox, { backgroundColor: hexCode }]}>
      <Text style={[styles.colorBoxText, textColor]}>{colorName} {hexCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2
  },
  colorBoxText: {
    color: "#fff",
    fontWeight: 'bold'
  }
});

export default ColorBox;
