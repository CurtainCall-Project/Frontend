import styled from 'styled-components';

export const InfoContainer = styled.div`
  background-color: ${({ grayBg }) => (grayBg ? '#f9fafb' : '#fff')};
  @media ${({ theme }) => theme.device.tablet} {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 612px;
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 24px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  display: grid;
  ${(imgStart) => imgStart || `justify-content: end;`};
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 6px;
`;

export const Heading = styled.h1`
  margin-bottom: 36px;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple};

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  min-width: 270px;
  margin-bottom: 35px;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.6em;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
`;

export const ImgWrapper = styled.div`
  width: auto;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  padding-right: 0;
  background-size: cover;
  float: ${({ imgStart }) => (imgStart ? `left` : `right`)};
`;
