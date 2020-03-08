import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import PalletePreview from "../components/PalletePreview";

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      `https://color-palette-api.kadikraman.now.sh/palettes`
    );

    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes(palettes => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  return (
    <FlatList
      style={styles.list}
      keyExtractor={item => item.colorName}
      data={colorPalettes}
      renderItem={({ item }) => {
        return (
          <PalletePreview
            handlePress={() => {
              navigation.navigate("ColorPalette", item);
            }}
            colorPalette={item}
          />
        );
      }}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate("ColorPaletteModal")}
        >
          <Text style={styles.buttonText}>Add color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: "white"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "teal",
    marginBottom: 10
  }
});

export default Home;
