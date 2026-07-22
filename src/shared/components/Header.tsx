import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../theme';

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo-symbol.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Se Liga IF</Text>

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
    alignItems: 'center',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  logo: {
    width: 70,
    height: 88,
    marginBottom: spacing.sm,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.4,
  },

  subtitle: {
    marginTop: spacing.xs,
    fontSize: 15,
    fontWeight: '500',
    color: '#E8F5E9',
  },
});