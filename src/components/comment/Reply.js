import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../elements/elements';
import basicProfile from '../../assets/mypage/default_profile.png';

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
      <Grid display="block">
        <Text width="auto" margin_bottom="5px">
          {props.reply.nickname}
        </Text>
        {props.reply.secret &&
          (props.user === props.nickname ? (
            <Text font_weight="regular" margin_bottom="0.25em">
              {props.reply.replyContent}
            </Text>
          ) : props.comment.id === props.reply.parentReply &&
            props.user === props.comment.nickname ? (
            <Text font_weight="regular" margin_bottom="0.25em">
              {props.reply.replyContent}
            </Text>
          ) : (
            <Text font_weight="regular" margin_bottom="0.25em">
              비밀 댓글입니다.
            </Text>
          ))}
        {!props.reply.secret && (
          <Text font_weight="regular" margin_bottom="0.25em">
            {props.reply.replyContent}
          </Text>
        )}
        <Grid>
          <Text font_size="14" font_weight="regular" width="auto">
            {registerDate}
          </Text>
        </Grid>
      </Grid>
    </ReplyBox>
  );
};

const ReplyBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  background-color: #e5e0f0;
  display: flex;
  margin-bottom: 10px;
  padding: 0.4em 0.6em;
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  margin: 0.25em 0.5em 0 0;
  @media ${({ theme }) => theme.device.tablet} {
    width: 16px;
    height: 16px;
  }
`;

export default Reply;
