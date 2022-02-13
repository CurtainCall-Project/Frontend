import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import {
  Grid,
  Text,
  Input,
  InputBox,
  Button,
  Image,
} from '../../elements/elements';
import { ReactComponent as PictureButton } from '../../assets/picture_icon.svg';
import { ReactComponent as DeleteButton } from '../../assets/delete_button.svg';

const PostWrite = ({
  boardType,
  imgFiles,
  selectBoardType,
  changeTitle,
  changeContent,
  selectFiles,
  deleteFile,
  onSubmit,
}) => {
  const hiddenFileInput = useRef();

  const renderImages = (previews) => {
    return previews.map((preview) => {
      return (
        <ImageWrapper key={preview.id}>
          <DeleteButtonWrapper
            onClick={() => deleteFile(preview.id)}
            key={preview.id}></DeleteButtonWrapper>
          <Image src={preview.dataUrl} key={preview.dataUrl}></Image>
        </ImageWrapper>
      );
    });
  };

  const onClick = (e) => hiddenFileInput.current.click();
  return (
    <FormWrapper>
      {/* <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth> */}
      <Grid>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={boardType}
          label="게시판 선택"
          onChange={selectBoardType}>
          <StyledMenuItem value="자유">자유게시판</StyledMenuItem>
          <StyledMenuItem value="시야">시야게시판</StyledMenuItem>
          <StyledMenuItem value="새내기">새내기게시판</StyledMenuItem>
        </StyledSelect>

        {/* </FormControl>
      </Box> */}
        <Grid margin="0 0 0 35px">
          <Text width="7%" type="label">
            제목
          </Text>
          <Input
            placeholder="제목을 입력해주세요"
            onChange={changeTitle}></Input>
        </Grid>
      </Grid>
      <Grid flex_direction="column" margin="45px 0">
        <Text type="label">내용</Text>
        <InputBox
          placeholder="내용을 입력해주세요"
          onChange={changeContent}></InputBox>
      </Grid>
      <Grid>
        <PictureButton onClick={() => onClick()}></PictureButton>
        <input
          type="file"
          multiple="multiple"
          accpet="image/*"
          ref={hiddenFileInput}
          style={{ display: 'none' }}
          onChange={selectFiles}
        />
        <Text margin_left="10px" color="gray">
          * 사진은 최대 8장까지 첨부 가능합니다.
        </Text>
        <Button onClick={onSubmit}>등록</Button>
      </Grid>
      <Images>{renderImages(imgFiles)}</Images>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 70%;
  overflow: auto;
  border: 1px solid;
  border-radius: 10px;
  color: ${({ theme }) => theme.borderGray};
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 117px auto 0 auto;
  padding: 37px 65px;
`;

const StyledSelect = styled(Select)`
  && {
    width: 120px;
    height: 35px;
    background-color: ${({ theme }) => theme.mainBlue};
    color: ${({ theme }) => theme.white};
    border-radius: 10px;
    padding-left: 10px;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    background-color: ${({ theme }) => theme.mainBlue};
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-right: 20px;
  margin-top: 20px;
`;

const DeleteButtonWrapper = styled(DeleteButton)`
  position: absolute;
  right: -13px;
  top: -12px;
  cursor: pointer;
`;

export default PostWrite;
