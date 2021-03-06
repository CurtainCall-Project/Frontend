import React from 'react';
import styled from 'styled-components';
import { getCookie } from '../../Cookie';
import basicProfile from '../../assets/default_profile.png';
import { FaBars } from 'react-icons/fa';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import SnsButton from './SnsButton';

const Topbar = ({
  profileImg,
  onLogOut,
  changeInput,
  handleEnterKey,
  clickSearchBtn,
  showSidebar,
}) => {
  const isLogin = !!getCookie('token');
  const profileImage = !!profileImg ? profileImg : basicProfile;
  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopbarLeftContent>
          <SnsButton />
        </TopbarLeftContent>
        <TopbarRightContent>
          <SearchContainer>
            <SearchInput
              clickSearchBtn={clickSearchBtn}
              changeInput={changeInput}
              handleEnterKey={handleEnterKey}
            />
          </SearchContainer>
          <ButtonWrapper>
            {isLogin ? (
              <>
                <ProfileImage src={profileImage} />
                <LogoutButton onClick={onLogOut}>로그아웃</LogoutButton>
              </>
            ) : (
              <LoginButton to="/signin">회원가입/로그인</LoginButton>
            )}
          </ButtonWrapper>
          <FaBarIcon onClick={showSidebar} />
        </TopbarRightContent>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

const TopbarContainer = styled.div`
  width: 100%;
  height: 51px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  @media ${({ theme }) => theme.device.tablet} {
    height: 35px;
  }
`;
const TopbarWrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  max-width: 1256px;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.tablet} {
    justify-content: flex-end;
  }
`;

const TopbarLeftContent = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: flex-start;
  width: auto;
  height: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
const TopbarRightContent = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: flex-end;
  width: auto;
  height: 100%;
`;
const SearchContainer = styled.div`
  margin-right: 36px;
  width: auto;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;
const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  margin-right: 10px;
  background-color: #fff;
  object-fit: cover;
  object-position: 50% 50%;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const LogoutButton = styled.div`
  color: ${({ theme }) => theme.colors.navSignInFontGray};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
const LoginButton = styled(Link)`
  color: ${({ theme }) => theme.colors.navSignInFontGray};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
const FaBarIcon = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.colors.navSignInFontGray};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
    margin-bottom: 2px;
  }
`;
export default Topbar;
