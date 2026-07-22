import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { borderRadius, colors, shadows, spacing, typography } from '../theme';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
};

export function PageHeader({ title, subtitle, onBack }: PageHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {onBack ? (
          <Pressable
            onPress={onBack}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Voltar"
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.backButtonPressed,
            ]}
          >
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </Pressable>
        ) : null}

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>

          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,

    borderBottomWidth: 1,
    borderBottomColor: colors.border,

    ...shadows.card,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: borderRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,

    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },

  backButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.94 }],
  },

  textContainer: {
    flex: 1,
    minHeight: 42,
    justifyContent: 'center',
  },

  title: {
    ...typography.h1,
    color: colors.text,
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 21,
    marginTop: spacing.xs,
  },
});
