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
import { Rating } from 'react-simple-star-rating';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

const ReviewWrite = (props) => {
  const hiddenFileInput = useRef();

  const ExampleCustomInput = ({ value, onClick }) => (
    <DateButton className="example-custom-input" onClick={onClick}>
      {value}
    </DateButton>
  );
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

  return (
    <FormWrapper>
      <Container>
        {props.nowMusical ? (
          <MusicalImage src={props.nowMusical.poster} />
        ) : (
          <MusicalImage src={props.reviewDetail.poster} />
        )}
        <TitleWrapper>
          <Text width="auto">
            {props.nowMusical
              ? props.nowMusical.prfnm
              : props.reviewDetail.musical.prfnm}
          </Text>
          <StarContainer>
            <Rating
              onClick={props.handleRating}
              ratingValue={props.rating}
              size={36}
              allowHalfIcon></Rating>
          </StarContainer>
        </TitleWrapper>
      </Container>
      <WriteContainer>
        <Grid
          flex_direction="column"
          width="auto"
          line_height="1.7em"
          margin="0 1em 0 0">
          <Text width="auto" margin="0 1em 0 0">
            장소
          </Text>
          <Text width="auto">관람일</Text>
          <Text width="auto">캐스팅</Text>
          <Text>후기</Text>
        </Grid>
        <Grid flex_direction="column" width="auto" line_height="2.7em">
          <TextLine>
            {props.nowMusical
              ? props.nowMusical.fcltynm
              : props.reviewDetail.place}
          </TextLine>
          <DatePicker
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            selected={props.viewingDate}
            onChange={(date) => props.setViewingDate(date)}
            placeholderText="관람일을 선택해주세요"
            customInput={<ExampleCustomInput />}
          />
          <Input
            width="15em"
            placeholder="캐스팅을 입력하세요"
            value={props.cast || ''}
            onChange={(e) => props.setCast(e.target.value)}
          />
        </Grid>
      </WriteContainer>
      <InputBox
        height="8em"
        placeholder="후기를 작성하세요"
        onChange={(e) => props.setContent(e.target.value)}
        defaultValue={props.content}></InputBox>
      <Grid margin="1em 0 0 0">
        <UploadButton onClick={() => handleClick()} />
        <input
          type="file"
          multiple="multiple"
          accpet="image/*"
          ref={hiddenFileInput}
          style={{ display: 'none' }}
          onChange={props.selectFiles}
        />
        <Text margin_left="0.5em" color="gray" font_size="13">
          * 사진은 최대 8장까지 첨부 가능합니다.
        </Text>
        <Button onClick={props.submitReview}>등록</Button>
      </Grid>
      <Images>
        {props.savedImages.length > 0 &&
          props.savedImages.map((url) => (
            <ImageWrapper key={url}>
              <DeleteButtonWrapper
                key={url}
                onClick={() =>
                  props.deleteSavedImage(url)
                }></DeleteButtonWrapper>
              <Image src={url} key={url}></Image>
            </ImageWrapper>
          ))}
        {renderImages(props.imgFiles)}
      </Images>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  border: 1px solid;
  border-radius: 0.5em;
  color: ${({ theme }) => theme.colors.borderGray};
  display: flex;
  flex-direction: column;
  padding: 2em 4em;
  @media ${({ theme }) => theme.device.mobile} {
    border: none;
    padding: 2em 1em;
  }
`;
const Container = styled.div`
  display: flex;
  margin-bottom: 1em;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    margin: 0 auto 1em auto;
    justify-content: flex-end;
    align-items: center;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 1em;
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
  }
`;
const MusicalImage = styled.img`
  width: 11em;
  height: 15em;
`;
const StarContainer = styled.div`
  margin-top: 1em;
`;
const WriteContainer = styled.div`
  display: flex;
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
const TextLine = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid;
  width: 15em;
  height: 2em;
  line-height: 2em;
  padding-left: 1em;
  color: #000;
`;
const DateButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid;
  background-color: #fff;
  width: 15em;
  height: 2em;
  padding-left: 1em;
  ${({ theme }) => theme.verticalCenter};
  font-size: 1em;
  justify-content: flex-start;
  cursor: pointer;
`;
const UploadButton = styled(PictureButton)`
  cursor: pointer;
`;
export default ReviewWrite;
