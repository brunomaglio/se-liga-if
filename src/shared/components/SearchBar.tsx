import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { borderRadius, colors, shadows, spacing, typography } from '../theme';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export function SearchBar({
  value,
  onChangeText,
  placeholder = 'Pesquise turma, professor ou sala',
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <Ionicons
        name="search"
        size={22}
        color={isFocused ? colors.primary : colors.textSecondary}
      />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        returnKeyType="search"
        autoCorrect={false}
        clearButtonMode="never"
      />

      {value.length > 0 && (
        <Pressable
          onPress={() => onChangeText('')}
          hitSlop={8}
          style={({ pressed }) => [
            styles.clearButton,
            pressed && styles.clearButtonPressed,
          ]}
        >
          <Ionicons name="close" size={18} color={colors.textSecondary} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,

    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,

    borderWidth: 1,
    borderColor: colors.border,

    ...shadows.card,
  },

  containerFocused: {
    borderColor: colors.primary,
    borderWidth: 1.5,
  },

  input: {
    flex: 1,
    paddingVertical: spacing.md,

    ...typography.body,
    color: colors.text,
  },

  clearButton: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  clearButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.94 }],
  },
});
