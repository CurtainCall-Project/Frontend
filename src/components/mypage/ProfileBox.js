import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text, Button } from '../../elements/elements';
import { ReactComponent as CameraIcon } from '../../assets/mypage/camera_icon.svg';
import basicProfile from '../../assets/mypage/default_profile.png';
import ProfileImage from '../ProfileImage';

const ProfileBox = ({ nickname, profileImage, email, handleFileChange }) => {
  const hiddenFileInput = useRef();
  const onClick = (e) => {
    hiddenFileInput.current.click();
  };
  const clickButton = () => {
    history.push('/mypage/nickname');
  };

  return (
    <Container>
      <ImageContainer>
        <ImageWrapper>
          <ProfileImage
            src={profileImage ?? basicProfile}
            size="8em"
            isBorder={false}></ProfileImage>
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
// const ProfileImage = styled.img`
//   width: 8em;
//   height: 8em;
//   border-radius: 4em;
//   overflow: hidden;
// `;
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
