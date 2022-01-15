import React from 'react';
import styled from 'styled-components';
import { ReactComponent as InstaIcon } from '../assets/insta_btn.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter_icon.svg';
import { ReactComponent as NaverIcon } from '../assets/naver.svg';
import { ReactComponent as SearchIcon } from '../assets/search_icon.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';

import { Link } from 'react-router-dom';

const Navbar = () => {
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
              <Link to="/search">
                <SearchButton>
                  <SearchIcon />
                </SearchButton>
              </Link>
              <SearchInput placeholder="검색" />
            </SearchContainer>
            <SigninLink to="/signin">회원가입/로그인</SigninLink>
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
                <InnerMenuItems>
                  <InnerMenuItem>자유게시판</InnerMenuItem>
                  <InnerMenuItem>시야게시판</InnerMenuItem>
                  <InnerMenuItem>새내기게시판</InnerMenuItem>
                </InnerMenuItems>
              </InnerMenu>
            </MenuItem>
            <MenuItem>
              <MenuName>마켓</MenuName>
              <InnerMenu>
                <InnerMenuItems>
                  <InnerMenuItem>오페라글라스 대여</InnerMenuItem>
                  <InnerMenuItem>굿즈거래</InnerMenuItem>
                </InnerMenuItems>
              </InnerMenu>
            </MenuItem>
            <MenuItem>
              <MenuName>공연후기</MenuName>
              <InnerMenu>
                <InnerMenuItems>
                  <InnerMenuItem>공연후기 작성</InnerMenuItem>
                  <InnerMenuItem>내가 쓴 후기</InnerMenuItem>
                </InnerMenuItems>
              </InnerMenu>
            </MenuItem>
            <MenuItem>
              <MenuName>마이페이지</MenuName>
            </MenuItem>
            <WriteMenuItem>
              <WriteMenuName>글쓰기</WriteMenuName>
              <WriteInnerMenu>
                <WriteInnerMenuItems>
                  <WriteInnerMenuItem>게시판 글쓰기</WriteInnerMenuItem>
                  <WriteInnerMenuItem>대여하기</WriteInnerMenuItem>
                  <WriteInnerMenuItem>거래하기</WriteInnerMenuItem>
                </WriteInnerMenuItems>
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
  display: flex;
  align-items: center;
  height: 51px;
  background-color: ${({ theme }) => theme.purple};
`;
const TopbarWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1256px;
  width: 80%;
  height: 51px;
  margin: 0 auto;
`;

const TopbarLeftContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  height: 51px;
  padding-left: 10px;
`;
const IconItem = styled.div`
  margin-right: 10px;
`;
const TopbarRightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70%;
  height: 51px;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
const SigninLink = styled(Link)`
  color: ${({ theme }) => theme.navSignInFontGray};
  transition: 0.3s;
  &:hover {
    color: #fff;
  }
`;

// Logo Bar
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
      background-color: #fafafa;
    }
  }
`;
const InnerMenuItems = styled.ul``;
const InnerMenuItem = styled.li`
  margin-top: 10px;

  &:hover {
    color: ${({ theme }) => theme.mainBlue};
  }
`;
const WriteInnerMenu = styled.div`
  width: 120px;
  display: none;
  position: absolute;
  left: 0px;
  background-color: ${({ theme }) => theme.mainBlue};
  border-radius: 0 0 10px 10px;
  font-size: 14px;
  text-align: center;
`;
const WriteMenuName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 55px;
  font-weight: bold;
`;
const WriteMenuItem = styled.li`
  position: relative;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  border-radius: 10px;
  &:hover {
    border-radius: 10px 10px 0 0;
    ${WriteInnerMenu} {
      display: block;
    }
  }
`;
const WriteInnerMenuItems = styled.ul``;
const WriteInnerMenuItem = styled.li`
  padding: 8px 0;
  &:hover {
    background-color: ${({ theme }) => theme.purple};
    &:last-child {
      border-radius: 0 0 10px 10px;
    }
  }
`;

export default Navbar;
