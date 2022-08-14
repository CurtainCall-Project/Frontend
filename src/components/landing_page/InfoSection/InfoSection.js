import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  SubTitle,
  ImgWrapper,
  Img,
} from './InfoElements';

const InfoSection = (props) => {
  return (
    <>
      {/* <InfoContainer id={id}> */}
      <InfoContainer grayBg={props.grayBg} id={props.id}>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Column1 imgStart={props.imgStart}>
              <TextWrapper>
                <Heading>{props.heading}</Heading>
                <SubTitle>{props.subTitle}</SubTitle>
              </TextWrapper>
            </Column1>
            <Column2 imgStart={props.imgStart}>
              <ImgWrapper>
                <Img
                  src={props.img}
                  alt={props.alt}
                  imgStart={props.imgStart}
                />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
