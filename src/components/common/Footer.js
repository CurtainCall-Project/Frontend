import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <TextContainer>
        <a href="https://www.notion.so/716503a8b3cf41c2887dfeb635074db3">
          개인정보처리방침
        </a>
        <a href="https://www.notion.so/3315a2035ee74966ad28c84695fa2161">
          이용약관
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdC5nngC_13SXN06Sw6qncBjo8aOo9uuUFA_eic_m1aRsbH3Q/viewform?usp=pp_url">
          문의
        </a>
        <span>Contact curtaincall780@gmail.com</span>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 69px;
  background-color: #c8c8c8;
  margin-top: 30px;
  ${({ theme }) => theme.verticalCenter};
  justify-content: flex-end;
  // position: absolute;
  // bottom: 0px;
  margin-top: 30px;
`;
const TextContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  a {
    font-size: ${({ theme }) => theme.middleFontSize};
    &:hover {
      text-decoration: underline;
    }
  }
  a:last-child {
    text-decoration: none;
  }
`;

export default Footer;
