export const colors = {
  primary: '#734AE2',
  primaryMuted: '#A68BFA',
  secondary: '#B9FD33',
  blackPrimary: '#1F2937',
  black: '#000000',
  blackGray: '#A9A9A9',
  blackLight: '#E8E8E8',
  white: '#FFFFFF',
  whiteLight: '#EDEDED',
  fair: '#FFD035',
} as const;

export const typography = {
  body14: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '-0.28px',
  },
  button16: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20.3px',
    letterSpacing: '-0.32px',
  },
  title16: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.32px',
  },
} as const;
