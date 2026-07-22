import { useEffect, useMemo, useState } from 'react';
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
import { colors, spacing, typography } from '../shared/theme';

type ScheduleScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Schedule'
>;

type ScheduleSection = {
  title: string;
  data: ScheduleItem[];
};

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

  const sections = useMemo<ScheduleSection[]>(() => {
    const groupedSchedules = schedules.reduce<Record<string, ScheduleItem[]>>(
      (groups, schedule) => {
        if (!groups[schedule.day]) {
          groups[schedule.day] = [];
        }

        groups[schedule.day].push(schedule);

        return groups;
      },
      {},
    );

    return Object.entries(groupedSchedules).map(([day, data]) => ({
      title: day,
      data,
    }));
  }, [schedules]);

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader
        title="Horários"
        subtitle={item}
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        {isLoading ? (
          <View style={styles.feedbackContainer}>
            <ActivityIndicator size="large" color={colors.primary} />

            <Text style={styles.feedbackText}>Carregando horários...</Text>
          </View>
        ) : schedules.length === 0 ? (
          <View style={styles.feedbackContainer}>
            <Text style={styles.emptyTitle}>Nenhum horário disponível</Text>

            <Text style={styles.feedbackText}>
              Esta turma ainda não possui horários cadastrados.
            </Text>
          </View>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(schedule) => schedule.id}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
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
    paddingHorizontal: spacing.lg,
  },

  listContent: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.xl,
  },

  dayTitle: {
    ...typography.h2,
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },

  feedbackContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },

  feedbackText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 21,
  },

  emptyTitle: {
    ...typography.h2,
    color: colors.text,
    textAlign: 'center',
  },
});
