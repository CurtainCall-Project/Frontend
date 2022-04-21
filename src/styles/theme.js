import { css } from 'styled-components';

const calcRem = (size) => `${size / 16}rem`;
const colors = {
  purple: '#6166b3',
  lightPurple: '#baabda',
  white: '#ffffff',
  navInnerMenuGray: '#fafafa',
  navSignInFontGray: '#595858',
  borderGray: '#9b9b9b',
  lightGray: '#f0f0f0',
  darkGray: '#e1e1e1',
};

const fontSize = {
  lg: calcRem(20),
  base: calcRem(16),
  sm: calcRem(14),
  xs: calcRem(12),
  xxs: calcRem(10),
};

const verticalCenter = css`
  display: flex;
  align-items: center;
`;

const deviceSize = {
  desktop: '1024px',
  tablet: '768px',
};

const device = {
  desktop: `only screen and (max-width: ${deviceSize.desktop})`,
  tablet: `only screen and (max-width: ${deviceSize.tablet})`,
};

const theme = {
  colors,
  fontSize,
  verticalCenter,
  deviceSize,
  device,
};

export default theme;
