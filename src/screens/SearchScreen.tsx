import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageHeader } from '../shared/components/PageHeader';
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList } from '../navigation/types/navigation';
import { SearchBar } from '../shared/components/SearchBar';
import { colors, spacing } from '../shared/theme';
import { mockSearchData } from '../services/mock/schedules';

type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const searchConfig = {
  turma: {
    title: 'Turmas',
    placeholder: 'Qual turma você procura?',
  },
  professor: {
    title: 'Professores',
    placeholder: 'Qual professor você procura?',
  },
  sala: {
    title: 'Salas',
    placeholder: 'Qual sala você procura?',
  },
};

export function SearchScreen({ route, navigation }: SearchScreenProps) {
  const [search, setSearch] = useState('');

  const { type } = route.params;
  const config = searchConfig[type];
  const items = mockSearchData[type];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title={config.title} onBack={() => navigation.goBack()} />
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

          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>Nenhum resultado encontrado</Text>

              <Text style={styles.emptyText}>
                Tente pesquisar por outro termo.
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [
                styles.item,
                pressed && styles.itemPressed,
              ]}
              onPress={() =>
                navigation.navigate('Schedule', {
                  item,
                })
              }
            >
              <Text style={styles.itemText}>{item}</Text>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.textSecondary}
              />
            </Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemPressed: {
    opacity: 0.6,
  },

  itemText: {
    fontSize: 16,
    color: colors.text,
  },

  emptyContainer: {
    marginTop: spacing.xl,
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },

  emptyText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
