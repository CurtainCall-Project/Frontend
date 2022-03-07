import React, { useState, useRef, useEffect } from 'react';
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
import { ReactComponent as TriangleIcon } from '../../assets/select_icon.svg';

const PostWrite = (props) => {
  const hiddenFileInput = useRef();

  // 이미지 미리보기
  const renderImages = (previews) => {
    return previews.map((preview) => {
      return (
        <ImageWrapper key={preview.id}>
          <DeleteButtonWrapper
            onClick={() => props.deleteFile(preview.id)}
            key={preview.id}></DeleteButtonWrapper>
          <Image src={preview.dataUrl} key={preview.dataUrl}></Image>
        </ImageWrapper>
      );
    });
  };

  const onClick = (e) => hiddenFileInput.current.click();
  return (
    <FormWrapper>
      <Grid>
        <SelectWrapper>
          <SelectBox onClick={props.clickSelectBox} selectBox={props.selectBox}>
            <SelectedName>
              <Name>
                {props.boardName ? `${props.boardName}게시판` : '게시판 선택'}
              </Name>
              <TriangleIcon />
            </SelectedName>
          </SelectBox>
          <OptionBox selectBox={props.selectBox}>
            <li value="1" onClick={props.selectBoardType}>
              자유게시판
            </li>
            <li value="2" onClick={props.selectBoardType}>
              시야게시판
            </li>
            <li value="3" onClick={props.selectBoardType}>
              새내기게시판
            </li>
          </OptionBox>
        </SelectWrapper>

        <Grid margin="0 0 0 35px">
          <Text width="7%" type="label">
            제목
          </Text>
          <Input
            placeholder="제목을 입력해주세요"
            onChange={props.changeTitle}></Input>
        </Grid>
      </Grid>
      <Grid flex_direction="column" margin="45px 0">
        <Text type="label">내용</Text>
        <InputBox
          placeholder="내용을 입력해주세요"
          onChange={props.changeContent}></InputBox>
      </Grid>
      <Grid>
        <PictureButton onClick={() => onClick()}></PictureButton>
        <input
          type="file"
          multiple="multiple"
          accpet="image/*"
          ref={hiddenFileInput}
          style={{ display: 'none' }}
          onChange={props.selectFiles}
        />
        <Text margin_left="10px" color="gray">
          * 사진은 최대 8장까지 첨부 가능합니다.
        </Text>
        <Button onClick={props.onSubmit}>등록</Button>
      </Grid>
      <Images>{renderImages(props.imgFiles)}</Images>
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
  margin: 100px auto 0 auto;
  padding: 37px 65px;
`;
const SelectWrapper = styled.div`
  position: relative;
  height: 35px;
`;
const SelectBox = styled.div`
  width: 120px;
  height: 35px;
  background-color: ${({ theme }) => theme.mainBlue};
  color: ${({ theme }) => theme.white};
  border-radius: ${(props) => (props.selectBox ? '10px 10px 0 0 ' : '10px')};
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;
const SelectedName = styled.div`
  display: flex;
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
`;
const Name = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  margin-right: 5px;
`;
const OptionBox = styled.ul`
  width: 120px;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.mainBlue};
  postion: absolute;
  top: 0;
  left: 0;
  ${(props) => props.selectBox || 'display: none'};

  li {
    width: 120px;
    height: 30px;
    color: #fff;
    ${({ theme }) => theme.verticalCenter};
    justify-content: center;
    &:hover {
      background-color: ${({ theme }) => theme.purple};
    }
  }
  li:last-child {
    border-radius: 0 0 10px 10px;
  }
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
