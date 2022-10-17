import { styled } from '..'

export const CardContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
})

export const ImageContainer = styled('div', {
  width: 100,
  height: 100,
  background: ' linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  image: {
    objectFit: 'cover',
  },
})

export const CardContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '0.5rem',
  lineHeight: 1.6,

  h3: {
    fontWeight: 400,
    color: '$gray-300',
    fontSize: '$xsm',
  },

  strong: {
    color: '$gray-200',
    fontSize: '$xsm',
  },

  button: {
    marginTop: 'auto',
    padding: 0,
    color: '$green',
    fontWeight: 700,
    fontSize: '1rem',
    border: 0,

    '&:hover': {
      color: '$green-light',
      transition: 'all 0.2s ease',
    },
  },
})
