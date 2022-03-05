import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../../elements/elements';

const MarketPostDetail = (props) => {
  return (
    <Container>
      <Grid>
        <Text width="7%">기종</Text>
        <Text width="30%" font_weight="regular">
          {props.post.product}
        </Text>
        <Text width="7%">가격</Text>
        <Text width="30%" font_weight="regular">
          {props.post.price}원
        </Text>
      </Grid>
      <Grid margin="15px 0">
        {props.nowBoardType === 'rent' && (
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
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export default MarketPostDetail;
