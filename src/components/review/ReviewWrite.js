import React, { useState, useRef } from 'react';
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
import { Rating } from 'react-simple-star-rating';

const ReviewWrite = (props) => {
  const hiddenFileInput = useRef();
  const [rating, setRating] = useState(0);

  // 선택한 이미지 미리보기
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

  // 첨부 아이콘 선택 시 실제 파일 선택하는 입력 태그 동작
  const handleClick = (e) => hiddenFileInput.current.click();

  // 별점 점수 담기
  const handleRating = (rate) => {
    const calculatedRate = rate / 20;
    setRating(calculatedRate);
  };

  return (
    <FormWrapper>
      <Grid margin="0 0 10px 0">
        <MusicalImage />
        <Grid
          flex_direction="column"
          justify_content="flex-end"
          width="80%"
          height="100%">
          <Text width="70%">공연명이 나오는 자리입니다.</Text>
          <StarContainer>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={48}
              allowHalfIcon></Rating>
          </StarContainer>
        </Grid>
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">장소</Text>
        <Input width="25%" />
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">관람일</Text>
        <Input width="25%" />
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">캐스팅</Text>
        <Input width="25%" />
      </Grid>
      <Grid flex_direction="column">
        <Text>후기</Text>
        <InputBox height="130px" placeholder="후기를 작성해주세요" />
      </Grid>
      <Grid margin="20px 0 0 0">
        <PictureButton onClick={() => handleClick()} />
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
        <Button>등록</Button>
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
  padding: 37px 65px;
`;
const MusicalImage = styled.img`
  width: 180px;
  height: 240px;
  margin-right: 20px;
`;
const StarContainer = styled.div`
  width: 250px;
  height: 50px;
  margin-top: 10px;
  position: relative;
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
export default ReviewWrite;
