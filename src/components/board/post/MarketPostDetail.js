import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../../elements/elements';

const MarketPostDetail = (props) => {
  const priceWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <Container>
      <Wrapper>
        <Grid width="40%">
          <Text width="20%">기종</Text>
          <Text width="auto" font_weight="regular">
            {props.post.product}
          </Text>
        </Grid>
        <Grid width="40%">
          <Text width="20%">가격</Text>
          <Text width="auto" font_weight="regular">
            {priceWithCommas(props.post.price)}원
          </Text>
        </Grid>
      </Wrapper>
      <Wrapper>
        {props.boardType === 'rent' && (
          <Grid width="40%">
            <Text width="20%">대여기간</Text>
            <Text width="auto" font_weight="regular">
              {props.post.term}
            </Text>
          </Grid>
        )}
        <Grid width="40%">
          <Text width="20%">거래장소</Text>
          <Text width="auto" font_weight="regular">
            {props.post.place} {props.post.delivery ? '/ 택배가능' : null}
          </Text>
        </Grid>
      </Wrapper>
      <Text font_weight="regular">{props.post.content}</Text>
      {props.post.boardImgs.map((image) => (
        <Image src={image} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1em;
  gap: 1em;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    & > div {
      width: auto;
    }
  }
`;
const Image = styled.img`
  max-width: 60%;
  height: auto;
  margin: 1em 0;
`;
export default MarketPostDetail;
