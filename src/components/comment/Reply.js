import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../elements/elements';
const Reply = () => {
  return (
    <ReplyBox>
      <ProfileImg></ProfileImg>
      <Grid display="block">
        <Text width="8%">닉네임</Text>
        <Text font_weight="regular">답글이 보이는 공간입니다</Text>
        <Grid>
          <Text font_weight="regular" width="auto">
            2022.01.01
          </Text>
        </Grid>
      </Grid>
    </ReplyBox>
  );
};

const ReplyBox = styled.div`
  width: 980px;
  float: right;
  border-radius: 5px;
  background-color: #e5e0f0;
  display: flex;
  line-height: 22px;
`;

const ProfileImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 10px;
  margin-top: 5px;
`;

export default Reply;
