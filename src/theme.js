import { css } from 'styled-components';

const colors = {
  mainBlue: '#6166b3',
  purple: '#baabda',
  white: '#ffffff',
  navInnerMenuGray: '#fafafa',
  navSignInFontGray: '#595858',
  nicknameFormGray: '#9b9b9b',
};

const fontSize = {
  signinFontSize: '20px',
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
