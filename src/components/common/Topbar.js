import React from 'react';
import styled from 'styled-components';
import { getCookie } from '../../Cookie';
import basicProfile from '../../assets/mypage/default_profile.png';
import { FaBars } from 'react-icons/fa';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import SnsButton from './SnsButton';
import ProfileImage from '../ProfileImage';

const Topbar = ({
  profileImg,
  roleType,
  onLogOut,
  changeInput,
  handleEnterKey,
  clickSearchBtn,
  showSidebar,
  clickAdminBtn,
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
                <ProfileImageWrapper>
                  <ProfileImage
                    src={profileImage}
                    size="30px"
                    isBorder={false}
                  />
                </ProfileImageWrapper>
                {roleType === 'ADMIN' && (
                  <AdminButton onClick={clickAdminBtn}>
                    관리자 페이지
                  </AdminButton>
                )}
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
  justify-content: space-between;
  max-width: 1080px;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.tablet} {
    justify-content: flex-end;
  }
`;

const TopbarLeftContent = styled.div`
  width: auto;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
const TopbarRightContent = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: auto;
`;
const SearchContainer = styled.div`
  margin-right: 36px;
  width: auto;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
const ButtonWrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  @media ${({ theme }) => theme.device.tablet} {
    margin-right: 6px;
  }
`;
// const ProfileImage = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 16px;
//   margin-right: 10px;
//   background-color: #fff;
//   object-fit: cover;
//   object-position: 50% 50%;
//   @media ${({ theme }) => theme.device.tablet} {
//     /* display: none; */
//   }
// `;

const LogoutButton = styled.div`
  color: ${({ theme }) => theme.colors.textGray};
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
  color: ${({ theme }) => theme.colors.textGray};
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
  color: ${({ theme }) => theme.colors.textGray};
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
const ProfileImageWrapper = styled.div`
  margin: 5px 8px;
`;
const AdminButton = styled.button`
  margin: 5px;
`;

export default Topbar;
