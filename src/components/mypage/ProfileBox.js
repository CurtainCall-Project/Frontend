import React, { useRef } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text, Button } from '../../elements/elements';
import { ReactComponent as CameraIcon } from '../../assets/camera_icon.svg';
import basicProfile from '../../assets/default_profile.png';

const ProfileBox = ({ nickname, profileImage, handleFileChange }) => {
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
        <Text text_align="center" margin="0 0 15px 0">
          {nickname}
        </Text>
        <Button onClick={clickButton}>변경</Button>
      </NicknameContainer>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 270px;
  height: 320px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 5px;
  ${({ theme }) => theme.verticalCenter};
  flex-direction: column;
  justify-content: space-between;
`;
const ImageContainer = styled.form`
  position: relative;
  height: auto;
`;
const ImageWrapper = styled.div`
  width: 135px;
  height: 135px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 68px;
`;
const ProfileImage = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 68px;
  overflow: hidden;
`;
const AddButton = styled.div`
  background-color: ${({ theme }) => theme.mainBlue};
  width: 36px;
  height: 36px;
  border-radius: 18px;
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  position: absolute;
  top: 117px;
  left: 47px;
  cursor: pointer;
`;
const NicknameContainer = styled.div`
  height: 30%;
`;
export default ProfileBox;
