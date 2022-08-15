import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/landing_imgs/main_bg.svg';
import WavesBg from '../../assets/landing_imgs/waves_bg.svg';
import Logo from '../../assets/landing_imgs/logo.svg';

const MainSection = () => {
  return (
    <Container>
      <MainBg>
        <ImageBg src={Background}></ImageBg>
      </MainBg>
      <WavesWrapper>
        <Waves src={WavesBg} />
      </WavesWrapper>
      <MainContent>
        <MainP>All-in-One!</MainP>
        <Wrapper>
          <MainH1>뮤지컬 종합 플랫폼 커튼콜</MainH1>
          <MainLogo src={Logo}></MainLogo>
        </Wrapper>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  height: 612px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBg = styled.div`
  width: 100%;
  height: 612px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;
const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const WavesWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;
const Waves = styled.img`
  display: block;
  width: calc(126% + 1.3px);

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(160% + 1.3px);
  }
`;

const MainContent = styled.div`
  z-index: 1;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

const MainP = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 27px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 18px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const MainH1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  max-width: 600px;
  margin: 10px 4px 0 0;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 30px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
  }
`;

const MainLogo = styled.img`
  width: auto;
`;
export default MainSection;
