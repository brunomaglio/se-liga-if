import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { borderRadius, colors, shadows, spacing, typography } from '../theme';

type MenuCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress: () => void;
};

export function MenuCard({ icon, title, description, onPress }: MenuCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={28} color={colors.primary} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      <View style={styles.chevronContainer}>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={colors.textSecondary}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginTop: spacing.md,

    borderWidth: 1,
    borderColor: colors.border,

    ...shadows.card,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  textContainer: {
    flex: 1,
    marginLeft: spacing.md,
  },

  title: {
    ...typography.h2,
    fontSize: 17,
    color: colors.text,
    marginBottom: spacing.xs,
  },

  description: {
    ...typography.caption,
    lineHeight: 18,
    color: colors.textSecondary,
  },

  chevronContainer: {
    width: 34,
    height: 34,
    borderRadius: borderRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
    backgroundColor: colors.background,
  },
});
