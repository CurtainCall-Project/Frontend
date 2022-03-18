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
      <Grid margin="0 0 10px 0">
        {props.nowMusical ? (
          <MusicalImage src={props.nowMusical.poster} />
        ) : (
          <MusicalImage src={props.reviewDetail.poster} />
        )}
        <Grid
          flex_direction="column"
          justify_content="flex-end"
          width="80%"
          height="100%">
          <Text width="70%">
            {props.nowMusical
              ? props.nowMusical.prfnm
              : props.reviewDetail.musical}
          </Text>
          <StarContainer>
            <Rating
              onClick={props.handleRating}
              ratingValue={props.rating}
              size={48}
              allowHalfIcon></Rating>
          </StarContainer>
        </Grid>
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">장소</Text>
        <TextLine>
          {props.nowMusical
            ? props.nowMusical.fcltynm
            : props.reviewDetail.place}
        </TextLine>
        {/* <Input width="25%" placeholder={props.nowMusical.place} /> */}
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">관람일</Text>
        {/* <Input width="25%" /> */}
        <DatePicker
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          selected={props.viewingDate}
          onChange={(date) => props.setViewingDate(date)}
          placeholderText="관람일을 선택해주세요"
          customInput={<ExampleCustomInput />}
        />
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">캐스팅</Text>
        <Input
          width="30%"
          value={props.casting}
          onChange={(e) => props.setCasting(e.target.value)}
        />
      </Grid>
      <Grid flex_direction="column">
        <Text>후기</Text>
        <InputBox
          height="130px"
          placeholder="후기를 작성해주세요"
          onChange={(e) => props.setContent(e.target.value)}
          defaultValue={props.content}></InputBox>
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
const TextLine = styled.div`
  border-bottom: 1px solid;
  width: 29%;
  height: 30px;
  line-height: 35px;
  padding-left: 10px;
  color: #000;
`;
const DateButton = styled.button`
  border: none;
  border-bottom: 1px solid;
  background-color: #fff;
  width: 32.5%;
  height: 30px;
  padding-left: 15px;
  ${({ theme }) => theme.verticalCenter};
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
  cursor: pointer;
`;
export default ReviewWrite;
