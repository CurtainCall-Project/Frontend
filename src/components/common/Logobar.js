import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Logobar = () => {
  return (
    <LogoContainer>
      <LogoWrapper>
        <Link to="/">
          <LogoImage />
        </Link>
      </LogoWrapper>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  @media ${({ theme }) => theme.device.tablet} {
    height: 50px;
  }
`;
const LogoWrapper = styled.div`
  max-width: 1080px;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.tablet} {
    justify-content: center;
  }
`;
const LogoImage = styled(Logo)`
  @media ${({ theme }) => theme.device.tablet} {
    width: 10em;
    height: 38px;
  }
`;
export default Logobar;
