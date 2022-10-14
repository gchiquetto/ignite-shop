import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      green: '#00875F',
      'green-light': '#00B37E',
      'gray-800': '#121214',
      'gray-600': '#202024',
      'gray-300': '#C4C4CC',
      'gray-200': '#E1E1E6',
    },
    fontSizes: {
      xsm: '1.125rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '2rem',
    },
  },
})
