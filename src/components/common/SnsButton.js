import React from 'react';
import styled from 'styled-components';
import insta from '../../assets/insta_img.png';
import twitter from '../../assets/twitter.svg';
import blog from '../../assets/blog.png';

const SnsButton = () => {
  return (
    <>
      <a href="https://www.instagram.com/curtain_call_official/">
        <Button>
          <img src={insta} alt="insta"></img>
        </Button>
      </a>
      <a href="https://twitter.com/curtaincall780?t=XfaP4y7edcPNXlseY4fNXQ&s=09">
        <Button>
          <img src={twitter} alt="twitter"></img>
        </Button>
      </a>
      <a href="https://m.blog.naver.com/curtaincall780">
        <Button last="last">
          <img src={blog} alt="naver_blog"></img>
        </Button>
      </a>
    </>
  );
};

const Button = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  background-color: #fff;
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  //margin-right: 0.5em;
  margin-right: ${(props) => (props.last ? '0' : '0.5em')};
`;
export default SnsButton;
