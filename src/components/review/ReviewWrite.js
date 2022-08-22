import React, { useRef } from 'react';
import styled from 'styled-components';
import {
  Grid,
  Text,
  Input,
  InputBox,
  Button,
  Image,
  ReviewInput,
  SaveButton,
} from '../../elements/elements';
import { ReactComponent as PictureButton } from '../../assets/write/picture_icon.svg';
import { ReactComponent as DeleteButton } from '../../assets/write/delete_button.svg';
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
    <FormContainer>
      <FormWrapper>
        <MusicalInfo>
          {props.nowMusical ? (
            <MusicalImage src={props.nowMusical.poster} />
          ) : (
            <MusicalImage src={props.reviewDetail.poster} />
          )}
          <InfoWrapper>
            <Text font_size="18" width="auto">
              {props.nowMusical
                ? props.nowMusical.prfnm
                : props.reviewDetail.musical.prfnm}
            </Text>
            <PlaceText>
              {props.nowMusical
                ? props.nowMusical.fcltynm
                : props.reviewDetail.place}
            </PlaceText>
            <StarContainer>
              <Rating
                onClick={props.handleRating}
                ratingValue={props.rating}
                size={36}
                allowHalfIcon></Rating>
            </StarContainer>
          </InfoWrapper>
        </MusicalInfo>
        <Section>
          <Text>관람일</Text>
          <DatePicker
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            selected={props.viewingDate}
            onChange={(date) => props.setViewingDate(date)}
            placeholderText="관람일을 선택해주세요"
            customInput={<ExampleCustomInput />}
          />
        </Section>
        <Section>
          <Text>캐스팅</Text>
          <ReviewInput
            placeholder="출연진을 입력하세요"
            value={props.cast || ''}
            onChange={(e) => props.setCast(e.target.value)}
          />
        </Section>
        <Section>
          <Text>후기</Text>
          <InputBox
            height="8em"
            placeholder="나만의 후기를 작성하세요!"
            onChange={(e) => props.setContent(e.target.value)}
            defaultValue={props.content}></InputBox>
        </Section>
        <Section>
          <ButtonWrapper>
            <UploadButton onClick={() => handleClick()} />
            <input
              type="file"
              multiple="multiple"
              accpet="image/*"
              ref={hiddenFileInput}
              style={{ display: 'none' }}
              onChange={props.selectFiles}
            />
            <Description>* 사진은 최대 8장까지 첨부 가능합니다.</Description>
          </ButtonWrapper>
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
        </Section>
        <SaveButton>등록</SaveButton>
      </FormWrapper>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 860px;
  width: 100%;
  margin: 4em auto;
  border: 1px solid;
  color: ${({ theme }) => theme.colors.borderGray};
  border-radius: 8px;
  padding: 60px 50px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.tablet} {
    border: none;
    padding: 30px 25px;
    margin: 1em auto;
  }
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MusicalInfo = styled.div`
  margin-bottom: 22px;
  display: flex;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
const InfoWrapper = styled.div`
  margin-left: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
    margin-left: 0;
    margin-top: 1em;
  }
`;
const PlaceText = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: #828282;
  margin-top: 0.5em;
`;
const Section = styled.div`
  width: 100%;
  margin-bottom: 22px;
`;
const MusicalImage = styled.img`
  width: 160px;
  height: 228px;
`;
const StarContainer = styled.div`
  margin-top: 1em;
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
const DateButton = styled.button`
  ${({ theme }) => theme.verticalCenter};
  justify-content: flex-start;
  cursor: pointer;
  width: 100%;
  height: 45px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  font-size: 1em;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0 1em;
  margin-top: 11px;

  @media ${({ theme }) => theme.device.tablet} {
    height: 40px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const UploadButton = styled(PictureButton)`
  cursor: pointer;
  width: 48px;
  height: 48px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 40px;
    height: 40px;
  }
`;
const Description = styled.span`
  color: ${({ theme }) => theme.colors.borderGray};
  font-size: 13px;
  margin-left: 8px;
`;
export default ReviewWrite;
