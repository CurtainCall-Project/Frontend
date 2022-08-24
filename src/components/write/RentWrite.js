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

const RentWrite = (props) => {
  const hiddenFileInput = useRef();

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
      <Grid margin="0 0 1em 0">
        <Text font_weight="regular" color="gray" font_size="13">
          * 필수 입력 항목을 작성해야 게시글 등록이 가능합니다. (필수 입력 항목:
          제목, 기종, 가격, 대여기간, 거래장소)
        </Text>
      </Grid>
      <Wrapper>
        <Grid>
          <Text width="10%" type="label">
            제목
          </Text>
          <Input
            placeholder="제목을 입력해주세요"
            onChange={props.changeTitle}></Input>
        </Grid>
      </Wrapper>
      <Wrapper>
        <Grid width="40%">
          <Text width="28%" type="label">
            기종
          </Text>
          <Input
            placeholder="거래할 물품의 기종을 입력해주세요"
            onChange={props.changeItem}></Input>
        </Grid>
        <Grid width="45%">
          <Text width="28%" type="label">
            가격
          </Text>
          <Input
            type="number"
            placeholder="숫자만 입력해주세요"
            onChange={props.changePrice}></Input>
        </Grid>
      </Wrapper>
      <Wrapper>
        <Grid width="40%">
          <Text width="28%" type="label">
            대여기간
          </Text>
          <Input
            placeholder="대여기간을 입력해주세요"
            onChange={props.changePeriod}></Input>
        </Grid>
        <Grid width="45%">
          <Text width="28%" type="label">
            거래장소
          </Text>
          <Input
            width="70%"
            placeholder="시/구(군) (ex. 서울시 강남구)"
            onChange={props.changePlace}></Input>
          <DeliveryButton
            onClick={props.clickDelivery}
            delivery={props.delivery}>
            택배가능
          </DeliveryButton>
        </Grid>
      </Wrapper>
      <Grid flex_direction="column" margin="0 0 1em 0">
        <Text type="label">내용</Text>
        <InputBox
          height="12em"
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
        <Text
          margin_left="0.5em"
          color="gray"
          font_size="13"
          font_weight="regular">
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
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
  gap: 6em;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 1em;
    & > div {
      width: auto;
      & > div {
        width: 15%;
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    & > div > div {
      width: 25%;
    }
  }
`;
const DeliveryButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 2em;
  margin-left: 1em;
  width: 6em;
  height: 2.2em;
  cursor: pointer;
  font-size: 1em;
  background-color: ${(props) => (props.delivery ? '#6166b3' : '#b0b0b0')};
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 0;
  }
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
const UploadButton = styled(PictureButton)`
  cursor: pointer;
`;
export default RentWrite;
