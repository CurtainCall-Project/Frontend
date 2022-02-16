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
import { ReactComponent as PictureButton } from '../../assets/picture_icon.svg';
import { ReactComponent as DeleteButton } from '../../assets/delete_button.svg';

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
      <Grid margin="20px 0">
        <Text width="10%" type="label">
          제목
        </Text>
        <Input
          placeholder="제목을 입력해주세요"
          onChange={props.changeTitle}></Input>
      </Grid>
      <Grid margin="20px 0" width="45%">
        <Text width="25%" type="label">
          기종
        </Text>
        <Input
          placeholder="거래할 물품의 기종을 입력해주세요"
          onChange={props.changeItem}></Input>
      </Grid>
      <Grid margin="20px 0 20px auto" width="45%">
        <Text width="30%" type="label">
          가격
        </Text>
        <Input
          placeholder="숫자만 입력해주세요"
          onChange={props.changePrice}></Input>
      </Grid>
      <Grid margin="20px 0" width="45%">
        <Text width="25%" type="label">
          대여기간
        </Text>
        <Input
          placeholder="대여기간을 입력해주세요"
          onChange={props.changePeriod}></Input>
      </Grid>
      <Grid margin="20px 0 20px auto" width="45%">
        <Text width="25%" type="label">
          거래장소
        </Text>
        <Input
          width="60%"
          placeholder="시/구(군) (ex. 서울시 강남구)"
          onChange={props.changePlace}></Input>
        <DeliveryButton onClick={props.clickDelivery} delivery={props.delivery}>
          택배가능
        </DeliveryButton>
      </Grid>
      <Grid flex_direction="column" margin="20px 0">
        <Text type="label">내용</Text>
        <InputBox
          height="200px"
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

const DeliveryButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  margin-left: 5px;
  width: 80px;
  height: 35px;
  cursor: pointer;
  background-color: ${(props) => (props.delivery ? '#6166b3' : '#b0b0b0')};
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
  color: ${({ theme }) => theme.white};
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
export default RentWrite;
