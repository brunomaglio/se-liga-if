import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors, spacing } from "../theme";

type PageHeaderProps = {
  title: string;
  onBack: () => void;
};

export function PageHeader({
  title,
  onBack,
}: PageHeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBack}
        accessibilityRole="button"
        accessibilityLabel="Voltar"
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
  },

  placeholder: {
    width: 40,
  },
});