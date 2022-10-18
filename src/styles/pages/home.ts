import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: '38rem',
  a: {
    textDecoration: 'none',
    color: '$gray-200',
  },

  '@media (max-width: 1200px)': {
    padding: '2rem',
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7464d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  position: 'relative',
  display: 'flex',
  alignContent: 'çenter',
  justifyContent: 'center',
  overflow: 'hidden',
  cursor: 'pointer',

  img: {
    objectFit: 'cover',
    width: 520,
    height: 480,

    '@media (max-width: 998px)': {
      width: 480,
      height: 440,
    },
    '@media (max-width: 680px)': {
      width: 440,
      height: 400,
    },
  },

  footer: {
    position: 'absolute',
    bottom: '0.75rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    backgroundColor: 'rgba(0,0,0,0.6)',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
    strong: {
      fontSize: '$sm',
    },

    span: {
      fontSize: '$md',
      color: '$green-light',
    },

    '.cart-button': {
      background: '$green',
      border: 0,
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem',
      cursor: 'pointer',

      svg: { color: '$white' },

      '&:hover': {
        background: '$green-light',
        transition: 'all 0.2s ease',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
