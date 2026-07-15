import { StyleSheet, Text, View } from "react-native";

import type { ScheduleItem } from "../../services/mock/types";
import { colors, spacing } from "../theme";

type ScheduleCardProps = {
  schedule: ScheduleItem;
};

export function ScheduleCard({
  schedule,
}: ScheduleCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {schedule.startTime} — {schedule.endTime}
      </Text>

      <Text style={styles.subject}>
        {schedule.subject}
      </Text>

      <Text style={styles.details}>
        Prof. {schedule.professor} • Sala {schedule.room}
      </Text>
    </View>
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

  time: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: spacing.xs,
  },

  subject: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
    marginBottom: spacing.xs,
  },

  details: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});