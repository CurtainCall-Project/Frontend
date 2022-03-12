import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '../../elements/elements';
import { ReactComponent as CameraIcon } from '../../assets/camera_icon.svg';

const ProfileBox = () => {
  return (
    <Container>
      <ImageContainer>
        <ProfileImage></ProfileImage>
        <AddButton>
          <CameraIcon />
        </AddButton>
      </ImageContainer>
      <NicknameContainer>
        <Text text_align="center" margin="0 0 15px 0">
          닉네임
        </Text>
        <Button>변경</Button>
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
const ImageContainer = styled.div`
  position: relative;
  height: auto;
`;
const ProfileImage = styled.div`
  width: 135px;
  height: 135px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 68px;
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
`;
const NicknameContainer = styled.div`
  height: 30%;
`;
export default ProfileBox;
