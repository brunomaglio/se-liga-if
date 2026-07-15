import { SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../navigation/types/navigation";
import { PageHeader } from "../shared/components/PageHeader";
import { ScheduleCard } from "../shared/components/ScheduleCard";
import { colors, spacing } from "../shared/theme";
import { mockSchedules } from "../services/mock/schedules";

type ScheduleScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Schedule"
>;

export function ScheduleScreen({
  route,
  navigation,
}: ScheduleScreenProps) {
  const { item } = route.params;
  const schedules = mockSchedules[item] ?? [];
  const sections = Object.entries(
  schedules.reduce<Record<string, typeof schedules>>(
    (groups, schedule) => {
      if (!groups[schedule.day]) {
        groups[schedule.day] = [];
      }

      groups[schedule.day].push(schedule);

      return groups;
    },
    {}
  )
).map(([day, data]) => ({
  title: day,
  data,
}));

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader
        title="Horários"
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <Text style={styles.itemName}>{item}</Text>

        {schedules.length === 0 ? (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyTitle}>
      Nenhum horário disponível
    </Text>

    <Text style={styles.emptyText}>
      Esta turma ainda não possui horários cadastrados.
    </Text>
  </View>
) : (
  <SectionList
    sections={sections}
    keyExtractor={(schedule) => schedule.id}
    showsVerticalScrollIndicator={false}
    renderSectionHeader={({ section }) => (
      <Text style={styles.dayTitle}>
        {section.title}
      </Text>
    )}
    renderItem={({ item: schedule }) => (
      <ScheduleCard schedule={schedule} />
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

  itemName: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.md,
  },

  dayTitle: {
  fontSize: 20,
  fontWeight: "700",
  color: colors.text,
  marginTop: spacing.md,
  marginBottom: spacing.sm,
},

emptyContainer: {
  marginTop: spacing.xl,
  alignItems: "center",
},

emptyTitle: {
  fontSize: 18,
  fontWeight: "600",
  color: colors.text,
  marginBottom: spacing.sm,
},

emptyText: {
  fontSize: 15,
  color: colors.textSecondary,
  textAlign: "center",
},

});