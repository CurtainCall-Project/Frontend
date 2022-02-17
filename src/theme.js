import { css } from 'styled-components';

const colors = {
  mainBlue: '#6166b3',
  purple: '#baabda',
  white: '#ffffff',
  navInnerMenuGray: '#fafafa',
  navSignInFontGray: '#595858',
  borderGray: '#9b9b9b',
  lightGray: '#f0f0f0',
  darkGray: '#e1e1e1',
};

const fontSize = {
  signinFontSize: '20px',
  middleFontSize: '16px',
  smallFontSize: '14px',
};

const verticalCenter = css`
  display: flex;
  align-items: center;
`;

const theme = {
  ...colors,
  fontSize,
  verticalCenter,
};
export default theme;
