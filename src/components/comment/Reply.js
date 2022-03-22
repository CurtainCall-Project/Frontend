import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../elements/elements';
import basicProfile from '../../assets/default_profile.png';

const Reply = (props) => {
  const registerDate = new Date(props.reply.registerDate).toLocaleString(
    'ko-KR'
  );

  const profileImage = !!props.reply.profileImg
    ? props.reply.profileImg
    : basicProfile;

  return (
    <ReplyBox>
      <ProfileImg src={profileImage}></ProfileImg>
      <Grid display="block" margin="5px 0">
        <Text width="8%" margin_bottom="5px">
          {props.reply.nickname}
        </Text>
        {props.reply.secret &&
          (props.user === props.nickname ? (
            <Text font_weight="regular" margin_bottom="5px">
              {props.reply.replyContent}
            </Text>
          ) : props.comment.id === props.reply.parentReply &&
            props.user === props.comment.nickname ? (
            <Text font_weight="regular" margin_bottom="5px">
              {props.reply.replyContent}
            </Text>
          ) : (
            <Text font_weight="regular" margin_bottom="5px">
              비밀 댓글입니다.
            </Text>
          ))}
        {!props.reply.secret && (
          <Text font_weight="regular" margin_bottom="5px">
            {props.reply.replyContent}
          </Text>
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
  margin-bottom: 10px;
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  margin: 9px 10px 0 7px;
`;

export default Reply;
