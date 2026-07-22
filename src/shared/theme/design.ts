export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
};

export const typography = {
  h1: {
    fontSize: 28,
    fontWeight: '700' as const,
    lineHeight: 34,
  },

  h2: {
    fontSize: 20,
    fontWeight: '700' as const,
  },

  body: {
    fontSize: 15,
    fontWeight: '400' as const,
  },

  caption: {
    fontSize: 13,
    fontWeight: '400' as const,
  },
};
