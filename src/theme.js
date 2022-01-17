import { css } from 'styled-components';

const colors = {
  mainBlue: '#6166b3',
  purple: '#baabda',
  white: '#ffffff',
  navInnerMenuGray: '#fafafa',
  navSignInFontGray: '#595858',
};

const verticalCenter = css`
  display: flex;
  align-items: center;
`;

const theme = {
  ...colors,
  verticalCenter,
};
export default theme;
