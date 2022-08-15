import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menubar = ({ userId }) => {
  const mypageMenu = 'mypage';

  return (
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
                  <InnerMenuItem>중고거래</InnerMenuItem>
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
              <MenuName mypageMenu={mypageMenu}>마이페이지</MenuName>
            </StyledLink>
          </MenuItem>
          <WriteMenuItem>
            <WriteMenuName>글쓰기</WriteMenuName>
            <WriteInnerMenu>
              <StyledLink to="/board/write">
                <li>게시판 글쓰기</li>
              </StyledLink>
              <StyledLink to="/rent/write">
                <li>대여하기</li>
              </StyledLink>
              <StyledLink to="/sell/write">
                <li className="sell">거래하기</li>
              </StyledLink>
            </WriteInnerMenu>
          </WriteMenuItem>
        </Menu>
      </BottombarWrapper>
    </BottombarContainer>
  );
};

const BottombarContainer = styled.div`
  height: 55px;
  border-bottom: 1px solid #dedede;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
const BottombarWrapper = styled.div`
  box-sizing: border-box;
  max-width: 1080px;
  height: 55px;
  margin: 0 auto;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const InnerMenu = styled.div`
  box-sizing: border-box;
  display: none;
  width: 135px;
  //min-width: 144px;
  position: absolute;
  top: 56px;
  left: 20px;
  font-size: 14px;
  padding-left: 1em;
  padding-bottom: 10px;

  & > ul {
    display: inline-block;
    width: 100%;
  }
`;
const MenuName = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  width: 95px;
  height: 55px;
  font-weight: bold;
  cursor: ${(props) => (props.mypageMenu ? 'cursor' : 'default')};
`;
const MenuItem = styled.li`
  position: relative;
  z-index: 2;
  &:hover {
    ${MenuName} {
      color: ${({ theme }) => theme.colors.purple};
      text-shadow: 1px 2px 2px #c2c4db;
    }
    ${InnerMenu} {
      display: block;
      background-color: ${({ theme }) => theme.colors.navInnerMenuGray};
    }
  }
`;
const InnerMenuItem = styled.li`
  margin-top: 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
const WriteInnerMenu = styled.ul`
  width: 120px;
  display: none;
  position: absolute;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 0 0 10px 10px;
  font-size: 14px;
  text-align: center;

  li {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    padding: 8px 0;
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightPurple};
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
  cursor: default;
`;
const WriteMenuItem = styled.li`
  position: relative;
  color: ${({ theme }) => theme.colors.purple};
  transition: 0.1s ease-out;
  border-radius: 10px 10px 0 0;
  z-index: 2;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};
    //border-radius: 10px 10px 0 0;
    ${WriteInnerMenu} {
      display: block;
      transition: 0.15s ease-out;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #000;
  width: 100%;
  //border: 1px solid green;
`;
export default Menubar;
