import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { Grid, Text } from '../../elements/elements';

const Reply = (props) => {
  const registerDate = new Date(props.reply.registerDate).toLocaleString(
    'ko-KR'
  );

  return (
    <ReplyBox>
      <ProfileImg></ProfileImg>
      <Grid display="block" margin="5px 0">
        <Text width="8%">{props.reply.nickname}</Text>
        {props.reply.secret &&
          (props.user === props.nickname ? (
            <Text font_weight="regular">{props.reply.replyContent}</Text>
          ) : props.comment.id === props.reply.parentReply &&
            props.user === props.comment.nickname ? (
            <Text font_weight="regular">{props.reply.replyContent}</Text>
          ) : (
            '비밀 댓글입니다.'
          ))}
        {!props.reply.secret && (
          <Text font_weight="regular">{props.reply.replyContent}</Text>
        )}
        <Grid>
          <Text font_weight="regular" width="auto">
            {registerDate}
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
  line-height: 24px;
  margin-bottom: 10px;
`;

const ProfileImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 10px;
  margin: 5px 10px 0 7px;
  margin-right: 10px;
`;

export default Reply;
