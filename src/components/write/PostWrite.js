import React, { useRef } from 'react';
import styled from 'styled-components';
import {
  Grid,
  Text,
  Input,
  InputBox,
  Button,
  Image,
} from '../../elements/elements';
import { ReactComponent as PictureButton } from '../../assets/write/picture_icon.svg';
import { ReactComponent as DeleteButton } from '../../assets/write/delete_button.svg';
import { ReactComponent as TriangleIcon } from '../../assets/write/select_icon.svg';

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
      <Grid margin="0 0 1em">
        <Text font_weight="regular" color="gray">
          * 필수 입력 항목을 작성해야 게시글 등록이 가능합니다. (필수 입력 항목:
          게시판 선택, 제목, 내용)
        </Text>
      </Grid>
      <TitleWrapper>
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
        <Grid>
          <Text width="10%" margin="0 0.2em 0 0 ">
            제목
          </Text>
          <Input
            placeholder="제목을 입력해주세요"
            onChange={props.changeTitle}></Input>
        </Grid>
      </TitleWrapper>
      <Grid flex_direction="column" margin="2em 0">
        <Text type="label">내용</Text>
        <InputBox
          placeholder="내용을 입력해주세요"
          onChange={props.changeContent}></InputBox>
      </Grid>
      <Grid>
        <UploadButton onClick={() => onClick()}></UploadButton>
        <input
          type="file"
          multiple="multiple"
          accpet="image/*"
          ref={hiddenFileInput}
          style={{ display: 'none' }}
          onChange={props.selectFiles}
        />
        <Text margin_left="10px" color="gray" font_size="13">
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
  width: 80vw;
  max-width: 1000px;
  overflow: auto;
  border: 1px solid;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.borderGray};
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 4em auto 0 auto;
  padding: 2em 3em;
  @media ${({ theme }) => theme.device.mobile} {
    width: 85vw;
    margin-top: 2em;
    border: none;
    padding: 0;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;
const SelectWrapper = styled.div`
  position: relative;
  height: 2em;
  margin-right: 2em;
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 1em;
  }
`;
const SelectBox = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  width: 8em;
  height: 2em;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${(props) => (props.selectBox ? '9px 9px 0 0 ' : '9px')};
  cursor: pointer;
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
  width: 8em;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.colors.purple};
  postion: absolute;
  top: 0;
  left: 0;
  ${(props) => props.selectBox || 'display: none'};

  li {
    width: 8em;
    height: 2em;
    color: #fff;
    ${({ theme }) => theme.verticalCenter};
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.lightPurple};
    }
  }
  li:last-child {
    border-radius: 0 0 9px 9px;
  }
}
`;
const UploadButton = styled(PictureButton)`
  cursor: pointer;
`;
const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;
const ImageWrapper = styled.div`
  position: relative;
  margin-right: 1em;
  margin-top: 1em;
`;
const DeleteButtonWrapper = styled(DeleteButton)`
  position: absolute;
  right: -0.8em;
  top: -0.8em;
  cursor: pointer;
`;

export default PostWrite;
