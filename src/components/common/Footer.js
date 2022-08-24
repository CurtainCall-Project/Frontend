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
  height: 78px;
  position: absolute;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.borderGray};
  ${({ theme }) => theme.verticalCenter};
  justify-content: flex-end;
`;
const TextContainer = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  margin-right: 30px;
  a {
    padding-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    line-height: 1rem;
    justify-content: flex-end;
    a:nth-child(3) {
      padding-right: 10px;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
`;

export default Footer;
