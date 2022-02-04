import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import google_logo from '../../assets/google_login.svg';
import axios from 'axios';

const GoogleLogin = () => {
  const googleButton = useRef(null);
  const [token, setToken] = useState('');
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    console.log('Hi');
    insertScript();
  }, []);

  // 구글 로그인 라이브러리를 document에 넣는다.
  const insertScript = () => {
    const script = document.createElement('script');
    script.src = 'http://apis.google.com/js/platform.js';
    script.onload = () => {
      googleSignIn();
    };
    document.body.appendChild(script);
  };

  const googleSignIn = () => {
    window.gapi.load('auth2', () => {
      const auth2 = gapi.auth2.init({
        client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
        scope: 'email',
      });
      console.log('api inited');
      auth2.attachClickHandler(googleButton.current, {}, (googleUser) => {
        // 사용자의 토큰을 받아온다.
        const user_token = googleUser.getAuthResponse().id_token;
        setToken(user_token);
        postToken(user_token);
      });
    });
  };

  const postToken = (token) => {
    axios
      .get(
        'https://cd3a2b97-904a-4127-9c73-a01eb564a693.mock.pstmn.io/login/google',
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setUser(res.data);
        //isSignup 여부에 따라 홈/닉네임 설정 페이지로 이동한다.
        res.data.isSignUp
          ? history.push('/')
          : history.push('/mypage/nickname');
      })
      .catch((error) => alert('error'));
  };

  console.log(user);
  //sessionStorage.setItem('token', token);
  return (
    <GoogleButton
      ref={googleButton}
      id="customBtn"
      className="customGPlusSignIn">
      <img src={google_logo} alt="구글"></img>
      <div className="buttonText">구글로 로그인</div>
    </GoogleButton>
  );
};

const GoogleButton = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: 350px;
  height: 100px;
  box-shadow: 5px 5px 15px #c6c6c6;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.signinFontSize};
  margin-top: 30px;
  cursor: pointer;

  img {
    margin-left: 53px;
  }

  div {
    margin-left: 60px;
  }
`;
export default GoogleLogin;
