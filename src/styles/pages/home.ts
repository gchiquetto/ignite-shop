import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: '38rem',
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7464d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  position: 'relative',

  display: 'flex',
  alignContent: 'çenter',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
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

    strong: {
      fontSize: '$md',
    },

    span: {
      fontSize: '$lg',
      color: '$green-light',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})