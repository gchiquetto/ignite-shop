import { styled } from '..'

export const SuccessContainer = styled('main', {
  flex: 1,
  maxWidth: '590px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  padding: '8rem 0',

  h1: {
    fontSize: '$lg',
    color: '$gray-200',
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.4,
    fontWeight: 400,
    color: '$gray-300',
    textAlign: 'center',

    strong: {
      fontWeight: 700,
    },
  },

  a: {
    color: '$green',
    fontWeight: 700,
    lineHeight: 1.6,
    fontSize: '$sm',
    textDecoration: 'none',

    '&:hover': {
      color: '$green-light',
      transition: 'all .2s ease',
    },
  },
})

export const ImageContainer = styled('div', {
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  width: '8rem',
  height: '9rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
