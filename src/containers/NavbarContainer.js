import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '../history';
import Navbar from '../components/common/Navbar';
import { logout } from '../modules/user';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.user.isLogin);
  // const userId = useSelector((state) => state.user.userId);
  const { isLogin, userId, nickname } = useSelector((state) => state.user);
  const [input, setInput] = useState('');

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
    dispatch(logout());
  };

  return (
    <Navbar
      isLogin={isLogin}
      userId={userId}
      nickname={nickname}
      onLogOut={onLogOut}
      changeInput={changeInput}
      handleEnterKey={handleEnterKey}
      clickSearchBtn={clickSearchBtn}
    />
  );
};

export default NavbarContainer;
