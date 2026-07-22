import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../navigation/types/navigation';
import { InfoRow } from '../shared/components/InfoRow';
import { PageHeader } from '../shared/components/PageHeader';
import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from '../shared/theme';

type LessonDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LessonDetails'
>;

export function LessonDetailsScreen({
  route,
  navigation,
}: LessonDetailsScreenProps) {
  const { schedule } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader
        title="Detalhes da aula"
        subtitle={schedule.subject}
        onBack={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.subjectCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="school-outline" size={30} color={colors.primary} />
          </View>

          <View style={styles.subjectContent}>
            <Text style={styles.subject}>{schedule.subject}</Text>
          </View>
        </View>

        <View style={styles.detailsCard}>
          <Text style={styles.sectionTitle}>Informações da aula</Text>

          <View style={styles.detailsList}>
            <InfoRow
              icon="person-outline"
              label="Professor"
              value={schedule.professor}
            />

            <InfoRow icon="calendar-outline" label="Dia" value={schedule.day} />

            <InfoRow
              icon="time-outline"
              label="Horário"
              value={`${schedule.startTime} — ${schedule.endTime}`}
            />

            <InfoRow
              icon="location-outline"
              label="Sala"
              value={schedule.room}
            />
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
    gap: spacing.lg,
  },

  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,

    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,

    borderWidth: 1,
    borderColor: colors.border,

    ...shadows.card,
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  subjectContent: {
    flex: 1,
  },

  subject: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  detailsCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,

    borderWidth: 1,
    borderColor: colors.border,

    ...shadows.card,
  },

  sectionTitle: {
    ...typography.h2,
    fontSize: 18,
    color: colors.text,
    marginBottom: spacing.lg,
  },

  detailsList: {
    gap: spacing.lg,
  },
});
