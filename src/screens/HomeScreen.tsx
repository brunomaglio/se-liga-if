import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types/navigation";

import { Header } from "../shared/components/Header";
import { MenuCard } from "../shared/components/MenuCard";
import { SearchBar } from "../shared/components/SearchBar";
import { colors, spacing } from "../shared/theme";

export function HomeScreen() {
  const [search, setSearch] = useState("");
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.slogan}>
          Tudo o que você precisa em um só lugar.
        </Text>

        <SearchBar
          value={search}
          onChangeText={setSearch}
        />

        <MenuCard
          icon="book"
          title="Turmas"
          description="Consulte os horários das turmas"
          onPress={() =>
  navigation.navigate("Search", {
    type: "turma",
  })
}
        />

        <MenuCard
          icon="person"
          title="Professores"
          description="Veja os horários dos professores"
          onPress={() =>
  navigation.navigate("Search", {
    type: "professor",
  })
}
        />

        <MenuCard
          icon="school"
          title="Salas"
          description="Consulte a ocupação das salas"
          onPress={() =>
  navigation.navigate("Search", {
    type: "sala",
  })
}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: spacing.lg,
  },

  slogan: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: spacing.lg,
  },
});