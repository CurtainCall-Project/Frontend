import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Logobar = () => {
  return (
    <LogoContainer>
      <LogoLink to="/">
        <LogoImage />
      </LogoLink>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  ${({ theme }) => theme.verticalCenter};
  height: 95px;
  @media ${({ theme }) => theme.device.tablet} {
    height: 50px;
  }
`;
const LogoLink = styled(Link)`
  margin: 0 auto;
`;
const LogoImage = styled(Logo)`
  width: 15em;
  height: 70.1px;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.tablet} {
    width: 10em;
    height: 38px;
  }
`;
export default Logobar;
