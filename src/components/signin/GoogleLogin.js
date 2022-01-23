import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import google_logo from '../../assets/google_login.svg';
import axios from 'axios';

const GoogleLogin = ({ alert }) => {
  const googleLoginBtn = useRef(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    googleSDK();
  }, []);

  //SDK 초기 설정 및 내 API초기화
  const googleSDK = () => {
    window.googleSDKLoaded = () => {
      console.log(window.gapi);
      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.init({
          client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
          scope: 'profile email',
        });
        //버튼 클릭시 사용자 정보 불러오기
        auth2.attachClickHandler(
          googleLoginBtn.current,
          {},
          (googleUser) => {
            // const profile = googleUser.getBasicProfile();
            // console.log(profile);
            console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
            setToken(googleUser.getAuthResponse().id_token);
            // console.log(`ID: ${profile.getId()}`);
            // console.log(`Name: ${profile.getName()}`);
            // console.log(`Image URL: ${profile.getImageUrl()}`);
            // console.log(`Email: ${profile.getEmail()}`);
          },
          (error) => {
            alert(JSON.stringify(error, undefined, 2));
          }
        );
      });
    };
    //구글 SDK 불러오기
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  };

  // 토큰 백으로 보내고, 백에서 받은 token sessionStorage에 저장하기
  // const GoogleApiPOST = (token) => {
  //   axios
  //     .get([url], {
  //       headers: {
  //         Authorization: token,
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((res) => {
  //       sessionStorage.setItem('token', res.data.token);
  //       alert('로그인 되었습니다');
  //  //회원가입 여부에 따라 닉네임 설정 페이지/홈으로 이동
  //       history.push('/home');
  //     })
  //     .catch((error) => alert('Error가 발생하였습니다', error));
  // };

  sessionStorage.setItem('token', token);
  return (
    <>
      <GoogleButton id="gSignInWrapper">
        <span className="label" />
        <div ref={googleLoginBtn} id="customBtn" className="customGPlusSignIn">
          <img src={google_logo} alt="구글"></img>
          <TitleWrapper>
            <div className="buttonText">구글로 로그인</div>
          </TitleWrapper>
        </div>
      </GoogleButton>
    </>
  );
};

const GoogleButton = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.signinFontSize};
  text-align: center;
  width: 350px;
  height: 100px;
  margin-top: 30px;
  box-shadow: 5px 5px 15px #c6c6c6;
  border-radius: 10px;

  #customBtn {
    width: 100%;
    height: 100%;
    padding-left: 53px;
    ${({ theme }) => theme.verticalCenter};
  }
  #customBtn:hover {
    cursor: pointer;
  }
  span.label {
    font-weight: normal;
  }
  div.buttonText {
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.signinFontSize};
    text-align: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
`;
export default GoogleLogin;
