import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import type { RootStackParamList } from '../navigation/types/navigation';
import { Header } from '../shared/components/Header';
import { MenuCard } from '../shared/components/MenuCard';
import { SearchBar } from '../shared/components/SearchBar';
import { colors, spacing } from '../shared/theme';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.searchSection}>
          <Text style={styles.sectionLabel}>O que você procura?</Text>

          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Pesquise turma, professor ou sala"
          />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Acesso rápido</Text>

          <MenuCard
            icon="book"
            title="Turmas"
            description="Consulte os horários das turmas"
            onPress={() =>
              navigation.navigate('Search', {
                type: 'turma',
              })
            }
          />

          <MenuCard
            icon="person"
            title="Professores"
            description="Veja os horários dos professores"
            onPress={() =>
              navigation.navigate('Search', {
                type: 'professor',
              })
            }
          />

          <MenuCard
            icon="school"
            title="Salas"
            description="Consulte a ocupação das salas"
            onPress={() =>
              navigation.navigate('Search', {
                type: 'sala',
              })
            }
          />
        </View>

        <View style={styles.noticesSection}>
          <View style={styles.noticesHeader}>
            <Text style={styles.sectionTitle}>Avisos</Text>

            <Text style={styles.seeAllText}>Ver todos</Text>
          </View>

          <View style={styles.noticeCard}>
            <View style={styles.noticeIcon}>
              <Ionicons
                name="notifications-outline"
                size={23}
                color={colors.primary}
              />
            </View>

            <View style={styles.noticeContent}>
              <Text style={styles.noticeTitle}>Nenhum aviso recente</Text>

              <Text style={styles.noticeText}>
                Os comunicados do campus aparecerão aqui.
              </Text>
            </View>
          </View>
        </View>
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
    paddingBottom: spacing.xl,
  },

  searchSection: {
    marginBottom: spacing.xl,
  },

  sectionLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },

  menuSection: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },

  noticesSection: {
    marginBottom: spacing.lg,
  },

  noticesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.md,
  },

  noticeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },

  noticeIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  noticeContent: {
    flex: 1,
  },

  noticeTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  noticeText: {
    fontSize: 13,
    lineHeight: 19,
    color: colors.textSecondary,
  },
});
