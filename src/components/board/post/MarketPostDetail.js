import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../../elements/elements';

const MarketPostDetail = (props) => {
  const priceWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <Container>
      <Grid>
        <Text width="7%">기종</Text>
        <Text width="30%" font_weight="regular">
          {props.post.product}
        </Text>
        <Text width="7%">가격</Text>
        <Text width="30%" font_weight="regular">
          {priceWithCommas(props.post.price)}원
        </Text>
      </Grid>
      <Grid margin="15px 0">
        {props.boardType === 'rent' && (
          <>
            <Text width="7%">대여기간</Text>
            <Text width="30%" font_weight="regular">
              {props.post.term}
            </Text>
          </>
        )}

        <Text width="7%">거래장소</Text>
        <Text width="30%" font_weight="regular">
          {props.post.place} {props.post.delivery ? '/ 택배가능' : null}
        </Text>
      </Grid>
      <Text font_weight="regular">{props.post.content}</Text>
      {props.post.boardImgs.map((image) => (
        <Image src={image} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Image = styled.img`
  max-width: 60%;
  height: auto;
  margin: 20px 0;
`;
export default MarketPostDetail;
