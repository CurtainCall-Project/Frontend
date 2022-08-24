import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SnsButton from './SnsButton';

const Sidebar = ({
  userId,
  sidebar,
  setSidebar,
  showSidebar,
  handleEnterKey,
  clickSearchBtn,
  changeInput,
}) => {
  const side = useRef();
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (sidebar && (!sideArea || !sideCildren)) {
      await setSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  });
  return (
    <Container sidebar={sidebar} ref={side}>
      <ButtonWrapper>
        <HideButton onClick={showSidebar} />
      </ButtonWrapper>
      <SearchWrapper>
        <SearchInput
          handleEnterKey={handleEnterKey}
          clickSearchBtn={clickSearchBtn}
          changeInput={changeInput}
        />
      </SearchWrapper>
      <MenuWrapper>
        <MenuName>게시판</MenuName>
        <Menu>
          <StyledLink to="/free">
            <MenuItem>자유게시판</MenuItem>
          </StyledLink>
          <StyledLink to="/sight">
            <MenuItem>시야게시판</MenuItem>
          </StyledLink>
          <StyledLink to="/new">
            <MenuItem>새내기게시판</MenuItem>
          </StyledLink>
        </Menu>
        <MenuName>마켓</MenuName>
        <Menu>
          <StyledLink to="/rent">
            <MenuItem>오페라글라스 대여</MenuItem>
          </StyledLink>
          <StyledLink to="/sell">
            <MenuItem>중고거래</MenuItem>
          </StyledLink>
        </Menu>
        <MenuName>공연후기</MenuName>
        <Menu>
          <StyledLink to="/review/search">
            <MenuItem>공연후기 작성</MenuItem>
          </StyledLink>
          <StyledLink to="/my-review">
            <MenuItem>내가 쓴 후기</MenuItem>
          </StyledLink>
        </Menu>
        <StyledLink to={`/mypage/${userId}`}>
          <MypageMenu>마이페이지</MypageMenu>
        </StyledLink>
        <MenuName>글쓰기</MenuName>
        <Menu>
          <StyledLink to="/board/write">
            <MenuItem>게시판 글쓰기</MenuItem>
          </StyledLink>
          <StyledLink to="/rent/write">
            <MenuItem>대여하기</MenuItem>
          </StyledLink>
          <StyledLink to="/sell/write">
            <MenuItem>거래하기</MenuItem>
          </StyledLink>
        </Menu>
      </MenuWrapper>
      <SnsWrapper>
        <SnsButton />
      </SnsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  width: 40vw;
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    display: block;
    position: fixed;
    z-index: 2;
    top: 0;
    right: ${(props) => (props.sidebar ? '0' : '-100%')};
    background-color: ${({ theme }) => theme.colors.navInnerMenuGray};
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    width: 45vw;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
const HideButton = styled(FaTimes)`
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
const SearchWrapper = styled.div`
  width: 100%;
  height: auto;
`;
const MenuWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
const MenuName = styled.div`
  color: ${({ theme }) => theme.colors.textGray};
  padding: 15px 0px 5px 7px;
`;
const MypageMenu = styled.div`
  padding: 15px 0px 5px 7px;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
    text-shadow: 1px 2px 2px #c2c4db;
  }
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled.li`
  padding: 4px 14px;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
    text-shadow: 1px 2px 2px #c2c4db;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
`;
const SnsWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: no-wrap;
  a {
    margin-right: 5px;
  }
`;

export default Sidebar;
