import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import type { RootStackParamList } from '../navigation/types/navigation';
import { PageHeader } from '../shared/components/PageHeader';
import { colors, spacing } from '../shared/theme';

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
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View style={styles.subjectCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="school-outline" size={28} color={colors.primary} />
          </View>

          <View style={styles.subjectContent}>
            <Text style={styles.subject}>{schedule.subject}</Text>
            <Text style={styles.professor}>{schedule.professor}</Text>
          </View>
        </View>

        <View style={styles.detailsCard}>
          <DetailRow icon="calendar-outline" text={schedule.day} />

          <DetailRow
            icon="time-outline"
            text={`${schedule.startTime} - ${schedule.endTime}`}
          />

          <DetailRow icon="location-outline" text={schedule.room} />
        </View>
      </View>
    </SafeAreaView>
  );
}

type DetailRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
};

function DetailRow({ icon, text }: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <Ionicons name={icon} size={22} color={colors.textSecondary} />
      <Text style={styles.detailText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: spacing.lg,
    gap: spacing.lg,
  },

  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  subjectContent: {
    flex: 1,
  },

  subject: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  professor: {
    fontSize: 15,
    color: colors.textSecondary,
  },

  detailsCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.lg,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  detailText: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
});