import { Pressable, StyleSheet, Text } from 'react-native';

import type { ScheduleItem } from '../../services/mock/types';
import { colors, spacing } from '../theme';

type ScheduleCardProps = {
  schedule: ScheduleItem;
  onPress?: () => void;
};

export function ScheduleCard({ schedule, onPress }: ScheduleCardProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.time}>
        {schedule.startTime} — {schedule.endTime}
      </Text>

      <Text style={styles.subject}>{schedule.subject}</Text>

      <Text style={styles.details}>
        Prof. {schedule.professor} • Sala {schedule.room}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  time: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.xs,
  },

  subject: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  details: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
