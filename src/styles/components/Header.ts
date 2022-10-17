import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',

  button: {
    background: '$gray-600',
    border: 0,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.125rem',
    cursor: 'pointer',

    svg: { color: '$gray-300' },
  },
})

export const ShoppingListContainer = styled('nav', {
  position: 'fixed',
  zIndex: 2,
  top: 0,
  bottom: 0,
  right: 0,
  background: '$gray-600',
  minWidth: '30rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem',

  '.close_button': {
    alignSelf: 'end',
  },

  '.checkout_button': {
    padding: '1.25rem 2rem',
    fontWeight: '700',
    color: '$white',
    fontSize: '$xsm',
    lineHeight: '1.6',
    background: '$green',
    border: 0,
    borderRadius: '8px',

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

export const ShoppingListContent = styled('div', {
  flex: 1,
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const ItemsCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const SummaryContainer = styled('div', {
  marginTop: 'auto',
  color: '$gray-200',
  lineHeight: 1.6,
  fontSize: '$xsm',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '.quantity_label': {
    fontSize: '1rem',
  },

  '.total_price': {
    lineHeight: 1.4,
    fontSize: '$md',
  },
})
