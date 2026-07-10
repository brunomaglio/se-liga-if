import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <View style={styles.logoCircle} />
      </View>

      <Text style={styles.title}>SE LIGA IF</Text>

      <Text style={styles.subtitle}>IFSP Campinas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 32,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  logo: {
    marginBottom: spacing.md,
  },

  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: spacing.xs,
    fontSize: 16,
    color: "#E8F5E9",
  },
});