import { css } from '@emotion/react';
import { normal } from './styleGuide';

const globalStyle = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'NanumSquareRound, sans-serif',
  },
  a: {
    textDecoration: 'none',
    color: normal['text'],
    cursor: 'pointer',
  },
  li: {
    listStyle: 'none',
  },
  button: {
    border: 'none',
    background: 'none',
  },
  input: {
    '&:focus': { outline: 'none' },
  },
});
export default globalStyle;
