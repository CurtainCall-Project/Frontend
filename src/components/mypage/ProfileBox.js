import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text, Button } from '../../elements/elements';
import { ReactComponent as CameraIcon } from '../../assets/mypage/camera_icon.svg';
import basicProfile from '../../assets/mypage/default_profile.png';

const ProfileBox = ({ nickname, profileImage, email, handleFileChange }) => {
  const hiddenFileInput = useRef();
  const onClick = (e) => {
    hiddenFileInput.current.click();
  };
  const clickButton = () => {
    history.push('/mypage/nickname');
  };

  const [isImageScaleUp, setIsImageScaleUp] = useState(false);

  return isImageScaleUp ? (
    <ScaleImageWrapper className="imgWrapper">
      <ScaleImageCloseBtn onClick={() => setIsImageScaleUp(false)}>
        x
      </ScaleImageCloseBtn>
      <ScaleImageInner>
        <img src={basicProfile} alt="" />
      </ScaleImageInner>
    </ScaleImageWrapper>
  ) : (
    <Container>
      <ImageContainer>
        <ImageWrapper onClick={() => setIsImageScaleUp(true)}>
          {profileImage ? (
            <ProfileImage src={profileImage} />
          ) : (
            <ProfileImage src={basicProfile} alt="기본 이미지" />
          )}
        </ImageWrapper>
        <AddButton onClick={() => onClick()}>
          <CameraIcon />
        </AddButton>
        <input
          type="file"
          accpet="image/*"
          ref={hiddenFileInput}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </ImageContainer>
      <NicknameContainer>
        <Text text_align="center" margin="0 0 1em 0">
          {nickname}
        </Text>
        <Text font_weight="regular" text_align="center" margin="0 0 15px 0">
          {email}
        </Text>
        <Button onClick={clickButton}>변경</Button>
      </NicknameContainer>
    </Container>
  );
};

const ScaleImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #353535;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* text-align: center;
   */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ScaleImageCloseBtn = styled.div`
  color: #fff;
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 30px;
`;

const ScaleImageInner = styled.div`
  width: 40%;
  min-width: 200px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.2em;
  width: 17em;
  height: 20em;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 0.3em;
`;
const ImageContainer = styled.div`
  position: relative;
  height: auto;
`;
const ImageWrapper = styled.div`
  width: 8em;
  height: 8em;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 4em;
`;
const ProfileImage = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 4em;
  overflow: hidden;
`;
const AddButton = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 2.2em;
  height: 2.2em;
  border-radius: 1.1em;
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  position: absolute;
  top: 6.9em;
  left: 2.9em;
  cursor: pointer;
`;
const NicknameContainer = styled.div`
  height: 40%;
  ${({ theme }) => theme.verticalCenter};
  flex-direction: column;
`;
export default ProfileBox;
