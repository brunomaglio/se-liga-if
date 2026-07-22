import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { ScheduleItem } from '../../services/mock/types';
import { borderRadius, colors, shadows, spacing, typography } from '../theme';

type ScheduleCardProps = {
  schedule: ScheduleItem;
  onPress?: () => void;
};

export function ScheduleCard({ schedule, onPress }: ScheduleCardProps) {
  const isPressable = Boolean(onPress);

  return (
    <Pressable
      onPress={onPress}
      disabled={!isPressable}
      accessibilityRole={isPressable ? 'button' : undefined}
      accessibilityLabel={`${schedule.subject}, das ${schedule.startTime} às ${schedule.endTime}`}
      style={({ pressed }) => [
        styles.container,
        pressed && isPressable && styles.pressed,
      ]}
    >
      <View style={styles.content}>
        <View style={styles.timeContainer}>
          <Ionicons name="time-outline" size={18} color={colors.primary} />

          <Text style={styles.time}>
            {schedule.startTime} — {schedule.endTime}
          </Text>
        </View>

        <Text style={styles.subject}>{schedule.subject}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Ionicons
              name="person-outline"
              size={17}
              color={colors.textSecondary}
            />

            <Text style={styles.detailText}>Prof. {schedule.professor}</Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons
              name="location-outline"
              size={17}
              color={colors.textSecondary}
            />

            <Text style={styles.detailText}>Sala {schedule.room}</Text>
          </View>
        </View>
      </View>

      {isPressable ? (
        <View style={styles.chevronContainer}>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={colors.textSecondary}
          />
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,

    borderWidth: 1,
    borderColor: colors.border,

    ...shadows.card,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  content: {
    flex: 1,
  },

  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },

  time: {
    ...typography.caption,
    fontWeight: '700',
    color: colors.primary,
  },

  subject: {
    ...typography.h2,
    fontSize: 17,
    color: colors.text,
    marginBottom: spacing.md,
  },

  detailsContainer: {
    gap: spacing.sm,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  detailText: {
    flex: 1,
    ...typography.body,
    fontSize: 14,
    color: colors.textSecondary,
  },

  chevronContainer: {
    width: 34,
    height: 34,
    borderRadius: borderRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.md,
    backgroundColor: colors.background,
  },
});
