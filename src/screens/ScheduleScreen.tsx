import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/types/navigation';
import { scheduleService } from '../services/scheduleService';
import type { ScheduleItem } from '../services/mock/types';
import { PageHeader } from '../shared/components/PageHeader';
import { ScheduleCard } from '../shared/components/ScheduleCard';
import { colors, spacing } from '../shared/theme';

type ScheduleScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Schedule'
>;

export function ScheduleScreen({ route, navigation }: ScheduleScreenProps) {
  const { item } = route.params;

  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSchedules() {
      setIsLoading(true);

      try {
        const scheduleData = await scheduleService.getByClass(item);
        setSchedules(scheduleData);
      } finally {
        setIsLoading(false);
      }
    }

    loadSchedules();
  }, [item]);

  const sections = Object.entries(
    schedules.reduce<Record<string, ScheduleItem[]>>((groups, schedule) => {
      if (!groups[schedule.day]) {
        groups[schedule.day] = [];
      }

      groups[schedule.day].push(schedule);

      return groups;
    }, {}),
  ).map(([day, data]) => ({
    title: day,
    data,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Horários" onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <Text style={styles.itemName}>{item}</Text>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loadingText}>Carregando horários...</Text>
          </View>
        ) : schedules.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Nenhum horário disponível</Text>

            <Text style={styles.emptyText}>
              Esta turma ainda não possui horários cadastrados.
            </Text>
          </View>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(schedule) => schedule.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            renderSectionHeader={({ section }) => (
              <Text style={styles.dayTitle}>{section.title}</Text>
            )}
            renderItem={({ item: schedule }) => (
              <ScheduleCard
                schedule={schedule}
                onPress={() =>
                  navigation.navigate('LessonDetails', {
                    schedule,
                  })
                }
              />
            )}
          />
        )}
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

  listContent: {
    paddingBottom: spacing.xl,
  },

  itemName: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },

  dayTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },

  loadingText: {
    fontSize: 15,
    color: colors.textSecondary,
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
