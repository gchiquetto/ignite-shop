import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  maxWidth: '1180px',
  margin: '0 auto',
  alignItems: 'stretch',
  gap: '4.5rem',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: '8px',
  height: '656px',
  maxWidth: '576px',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  h1: {
    fontSize: '$lg',
    color: '$gray-300',
    lineHeight: '1.6',
  },

  h2: {
    fontSize: '$lg',
    color: '$green',
    lineHeight: '1.4',
    fontWeight: '400',
  },

  p: {
    fontSize: '$xsm',
    lineHeight: '1.6',
  },

  button: {
    padding: '1.25rem 2rem',
    fontWeight: '700',
    color: '$white',
    fontSize: '$xsm',
    lineHeight: '1.6',
    background: '$green',
    border: 0,
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: 'auto',

    '&:hover': {
      background: '$green-light',
      transition: 'all 0.2s ease',
    },

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },
})
