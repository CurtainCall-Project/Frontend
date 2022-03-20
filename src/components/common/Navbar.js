import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import { ReactComponent as InstaIcon } from '../../assets/insta_icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter_icon.svg';
import { ReactComponent as NaverIcon } from '../../assets/naver.svg';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

const Navbar = ({
  isLogin,
  userId,
  nickname,
  onLogOut,
  changeInput,
  handleEnterKey,
  clickSearchBtn,
}) => {
  // 비로그인 사용자 글쓰기 기능 접근 제한
  const controlUserAccess = (e) => {
    if (!(isLogin && nickname)) {
      history.push('/mypage/nickname');
      return;
    }
  };

  return (
    <>
      <TopbarContainer>
        <TopbarWrapper>
          <TopbarLeftContent>
            <IconItem>
              <InstaIcon />
            </IconItem>
            <IconItem>
              <TwitterIcon />
            </IconItem>
            <IconItem>
              <NaverIcon />
            </IconItem>
          </TopbarLeftContent>
          <TopbarRightContent>
            <SearchContainer>
              <SearchButton onClick={clickSearchBtn}>
                <SearchIcon />
              </SearchButton>
              <SearchInput
                placeholder="검색"
                onChange={changeInput}
                onKeyPress={handleEnterKey}
              />
            </SearchContainer>
            {isLogin ? (
              <LogoutButton onClick={onLogOut}>로그아웃</LogoutButton>
            ) : (
              <LoginButton to="/signin">회원가입/로그인</LoginButton>
            )}
          </TopbarRightContent>
        </TopbarWrapper>
      </TopbarContainer>
      <LogoContainer>
        <LogoLink to="/">
          <LogoImage />
        </LogoLink>
      </LogoContainer>
      <BottombarContainer>
        <BottombarWrapper>
          <Menu>
            <MenuItem>
              <MenuName>게시판</MenuName>
              <InnerMenu>
                <ul>
                  <StyledLink to="/free">
                    <InnerMenuItem>자유게시판</InnerMenuItem>
                  </StyledLink>
                  <StyledLink to="/sight">
                    <InnerMenuItem>시야게시판</InnerMenuItem>
                  </StyledLink>
                  <StyledLink to="/new">
                    <InnerMenuItem>새내기게시판</InnerMenuItem>
                  </StyledLink>
                </ul>
              </InnerMenu>
            </MenuItem>
            <MenuItem>
              <MenuName>마켓</MenuName>
              <InnerMenu>
                <ul>
                  <StyledLink to="/rent">
                    <InnerMenuItem>오페라글라스 대여</InnerMenuItem>
                  </StyledLink>
                  <StyledLink to="/sell">
                    <InnerMenuItem>굿즈거래</InnerMenuItem>
                  </StyledLink>
                </ul>
              </InnerMenu>
            </MenuItem>
            <MenuItem>
              <MenuName>공연후기</MenuName>
              <InnerMenu>
                <ul>
                  <StyledLink to="/review/search">
                    <InnerMenuItem>공연후기 작성</InnerMenuItem>
                  </StyledLink>
                  <StyledLink to="/my-review">
                    <InnerMenuItem>내가 쓴 후기</InnerMenuItem>
                  </StyledLink>
                </ul>
              </InnerMenu>
            </MenuItem>
            <MenuItem>
              <StyledLink to={`/mypage/${userId}`}>
                <MenuName>마이페이지</MenuName>
              </StyledLink>
            </MenuItem>
            <WriteMenuItem>
              <WriteMenuName>글쓰기</WriteMenuName>
              <WriteInnerMenu>
                <li value="1" onClick={controlUserAccess}>
                  게시판 글쓰기
                </li>
                <li value="2" onClick={controlUserAccess}>
                  대여하기
                </li>
                <li value="3" onClick={controlUserAccess} className="sell">
                  거래하기
                </li>
              </WriteInnerMenu>
            </WriteMenuItem>
          </Menu>
        </BottombarWrapper>
      </BottombarContainer>
    </>
  );
};

// Top Bar
const TopbarContainer = styled.div`
  height: 51px;
  background-color: ${({ theme }) => theme.purple};
`;
const TopbarWrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  max-width: 1256px;
  width: 80%;
  height: 51px;
  margin: 0 auto;
`;

const TopbarLeftContent = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: flex-start;
  width: 30%;
  height: 51px;
  padding-left: 10px;
`;
const IconItem = styled.div`
  margin-right: 10px;
`;
const TopbarRightContent = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: flex-end;
  width: 70%;
  height: 51px;
`;
const SearchContainer = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  position: relative;
  width: 250px;
  height: 38px;
  margin-right: 36px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.white};
`;
const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 9px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  padding: 6px 37px 6px 20px;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 16px;
`;
const LogoutButton = styled.div`
  color: ${({ theme }) => theme.navSignInFontGray};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;
const LoginButton = styled(Link)`
  color: ${({ theme }) => theme.navSignInFontGray};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

// Logo Bar
const LogoContainer = styled.div`
  ${({ theme }) => theme.verticalCenter};
  height: 95px;
`;
const LogoLink = styled(Link)`
  margin: 0 auto;
`;
const LogoImage = styled(Logo)`
  width: 250px;
  height: 65px;
  margin: 0 auto;
`;

// Bottom Bar
const BottombarContainer = styled.div`
  height: 55px;
  border-bottom: 1px solid #dedede;
`;
const BottombarWrapper = styled.div`
  max-width: 1256px;
  width: 80%;
  height: 55px;
  margin: 0 auto;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const InnerMenu = styled.div`
  display: none;
  width: 112px;
  position: absolute;
  top: 56px;
  left: 0px;
  font-size: 14px;
  padding-left: 18px;
  padding-bottom: 10px;
`;
const MenuName = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  width: 95px;
  height: 55px;
  font-weight: bold;
`;
const MenuItem = styled.li`
  position: relative;

  &:hover {
    ${MenuName} {
      color: ${({ theme }) => theme.mainBlue};
      text-shadow: 1px 2px 2px #c2c4db;
    }
    ${InnerMenu} {
      display: block;
      background-color: ${({ theme }) => theme.navInnerMenuGray};
    }
  }
`;
const InnerMenuItem = styled.li`
  margin-top: 10px;

  &:hover {
    color: ${({ theme }) => theme.mainBlue};
  }
`;
const WriteInnerMenu = styled.ul`
  width: 120px;
  display: none;
  position: absolute;
  left: 0px;
  background-color: ${({ theme }) => theme.mainBlue};
  border-radius: 0 0 10px 10px;
  font-size: 14px;
  text-align: center;

  li {
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    padding: 8px 0;
    &:hover {
      background-color: ${({ theme }) => theme.purple};
    }
  }
  li.sell {
    border-radius: 0 0 10px 10px;
  }
`;
const WriteMenuName = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  width: 120px;
  height: 55px;
  font-weight: bold;
`;
const WriteMenuItem = styled.li`
  position: relative;
  color: ${({ theme }) => theme.mainBlue};
  transition: 0.1s ease-out;
  border-radius: 10px 10px 0 0;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.mainBlue};
    //border-radius: 10px 10px 0 0;
    ${WriteInnerMenu} {
      display: block;
      transition: 0.15s ease-out;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
`;
export default Navbar;
