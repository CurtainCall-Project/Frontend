import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/common/Navbar';
import { logout } from '../modules/user';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const userId = useSelector((state) => state.user.userId);
  console.log(userId);
  const onLogOut = () => {
    dispatch(logout());
  };

  console.log(isLogin);
  return <Navbar isLogin={isLogin} userId={userId} onLogOut={onLogOut} />;
};

export default NavbarContainer;
