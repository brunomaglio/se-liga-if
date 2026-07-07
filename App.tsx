import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "./src/shared/components/SearchBar";
import { colors, spacing } from "./src/shared/theme";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: "center",
  },
});