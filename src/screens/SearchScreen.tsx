import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageHeader } from "../shared/components/PageHeader";

import { RootStackParamList } from "../navigation/types/navigation";
import { SearchBar } from "../shared/components/SearchBar";
import { colors, spacing } from "../shared/theme";
import { mockSearchData } from "../services/mock/schedules";

type SearchScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Search"
>;

const searchConfig = {
  turma: {
    title: "Turmas",
    placeholder: "Pesquise uma turma",
  },
  professor: {
    title: "Professores",
    placeholder: "Pesquise um professor",
  },
  sala: {
    title: "Salas",
    placeholder: "Pesquise uma sala",
  },
};

export function SearchScreen({
  route,
  navigation,
}: SearchScreenProps) {
  const [search, setSearch] = useState("");

  const { type } = route.params;
  const config = searchConfig[type];
  const items = mockSearchData[type];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

     <PageHeader
      title={config.title}
      onBack={() => navigation.goBack()}
    />
      <View style={styles.content}>

        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder={config.placeholder}
        />

        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    padding: spacing.lg,
  },

  list: {
    paddingTop: spacing.md,
  },

  item: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  itemText: {
    fontSize: 16,
    color: colors.text,
  },
});