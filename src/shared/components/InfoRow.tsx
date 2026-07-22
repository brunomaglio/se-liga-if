import { Ionicons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { borderRadius, colors, spacing, typography } from '../theme';

type InfoRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: ReactNode;
};

export function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={20} color={colors.primary} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>

        {typeof value === 'string' ? (
          <Text style={styles.value}>{value}</Text>
        ) : (
          value
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  textContainer: {
    flex: 1,
  },

  label: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  value: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text,
  },
});
