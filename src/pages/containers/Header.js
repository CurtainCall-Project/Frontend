import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCookie } from '../../Cookie';
import history from '../../history';
import Topbar from '../../components/common/Topbar';
import Logobar from '../../components/common/Logobar';
import Menubar from '../../components/common/Menubar';
import Sidebar from '../../components/common/Sidebar';
import { logout } from '../../modules/user';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const { userId, profileImg } = useSelector((state) => state.user);
  const [input, setInput] = useState('');

  // fabar icon 클릭 이벤트에 따른 사이드바 여부
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const location = useLocation();

  useEffect(() => {
    setSidebar(false);
  }, [location]);

  // 엔터 키 눌렀을 때 뮤지컬 검색 수행
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      clickSearchBtn();
    }
  };

  // 검색 버튼 클릭 시 검색 실행
  const clickSearchBtn = () => {
    history.push(`/search?keyword=${input}`);
  };

  // 검색어 입력 시 저장하기
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const onLogOut = () => {
    deleteCookie('token');
    dispatch(logout());
  };

  return (
    <Container>
      <Topbar
        profileImg={profileImg}
        onLogOut={onLogOut}
        changeInput={changeInput}
        handleEnterKey={handleEnterKey}
        clickSearchBtn={clickSearchBtn}
        showSidebar={showSidebar}
      />
      <Logobar />
      <Menubar userId={userId} />
      <Sidebar
        userId={userId}
        sidebar={sidebar}
        setSidebar={setSidebar}
        showSidebar={showSidebar}
        handleEnterKey={handleEnterKey}
        clickSearchBtn={clickSearchBtn}
        changeInput={changeInput}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
export default Header;
