import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  maxWidth: '1180px',
  margin: '0 auto',
  alignItems: 'stretch',
  gap: '4.5rem',

  '@media (max-width: 1200px)': {
    padding: '2rem',
  },

  '@media (max-width: 968px)': {
    gap: '3.5rem',
  },

  '@media (max-width: 680px)': {
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    overflow: 'hidden',
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: '8px',
  padding: '4rem 0',
  // height: '41rem',
  //   width: '100%',

  '@media (max-width: 1200px)': {
    img: { height: '31rem', width: '26rem' },
  },
  '@media (max-width: 968px)': {
    padding: '2rem 0',
    img: { height: '28rem', width: '23rem' },
    // height: '28rem',
    // width: '23rem',
  },

  '@media (max-width: 680px)': {
    padding: '1rem 0',

    // height: '20rem',
    // width: '15rem',
  },

  '@media (max-width: 520px)': {
    padding: '1rem 0',
    img: { height: '20rem', width: '15rem' },
    // height: '20rem',
    // width: '15rem',
  },

  img: {
    objectFit: 'cover',
  },
})

export const ProductDescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  '@media (max-width: 934px)': {
    gap: '2rem',
  },

  '@media (max-width: 831px)': {
    gap: '1.25rem',
  },

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
