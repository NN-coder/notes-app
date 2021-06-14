import { composeStyles, keyframes, style } from '@vanilla-extract/css';

export const containerClass = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  fontSize: '3rem',
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
});

export const iconClass = style({
  width: '100px',
  height: '100px',
  marginBottom: '10px',
});

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0turn)',
  },
  '100%': {
    transform: 'rotate(1turn)',
  },
});

export const loadingIconClass = composeStyles(
  iconClass,
  style({ animation: `0.8s ${rotate} linear infinite` })
);
