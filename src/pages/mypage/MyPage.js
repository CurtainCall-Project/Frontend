import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text, Grid } from '../../elements/elements';
import PostBox from '../../components/mypage/PostBox';
import ProfileBox from '../../components/mypage/ProfileBox';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts, addProfileImage, getUser } from '../../modules/user';

const MyPage = () => {
  const dispatch = useDispatch();
  // 현재 유저의 마이페이지 정보 가져오기
  const { myPost, myScrap } = useSelector((state) => state.user.userPosts);
  // 현재 유저 정보 가져오기
  const { userId, nickname, email, profileImg } = useSelector(
    (state) => state.user
  );
  const [profileImage, setProfileImage] = useState(profileImg);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserPosts());
  }, []);

  // 이미지 파일 선택 시 저장하고, post하기
  const handleFileChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      dispatch(addProfileImage(e.target.files[0]));
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // 내가 쓴글 더보기 버튼 클릭 시 내가 쓴글 페이지로 이동
  const clickMorePostBtn = () => {
    history.push(`/mypage/${userId}/my-post`);
  };
  // 스크랩 더보기 버튼 클릭 시 스크랩 페이지로 이동
  const clickMoreScrapBtn = () => {
    history.push(`/mypage/${userId}/scrapped-post`);
  };

  return (
    <Container>
      <ProfileBox
        nickname={nickname}
        profileImage={profileImage}
        email={email}
        handleFileChange={handleFileChange}
      />
      <PostContainer>
        <Grid margin="0 0 15px 0" justify_content="space-between">
          <Text width="auto">내가 쓴 글</Text>
          <TextWrapper>
            <Text font_size="1em" width="auto" onClick={clickMorePostBtn}>
              더보기 {'>'}
            </Text>
          </TextWrapper>
        </Grid>
        {myPost.length > 0 ? (
          <PostBox postInfo={myPost} />
        ) : (
          <Text font_weight="regular">아직 작성한 글이 없어요</Text>
        )}
        <Grid margin="2em 0 1em 0" justify_content="space-between">
          <Text width="auto">스크랩</Text>
          <TextWrapper>
            <Text font_size="1em" width="auto" onClick={clickMoreScrapBtn}>
              더보기 {'>'}
            </Text>
          </TextWrapper>
        </Grid>
        {myScrap.length > 0 ? (
          <PostBox postInfo={myScrap} />
        ) : (
          <Text font_weight="regular">아직 스크랩한 글이 없어요</Text>
        )}
      </PostContainer>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 5em auto 0 auto;
  gap: 6em;
  padding: 0 1em;
  max-width: 1256px;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 2em;
  }
`;
const PostContainer = styled.div`
  width: 80%;
  max-width: 730px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 80vw;
  }
`;
const TextWrapper = styled.div`
  cursor: pointer;
`;
export default MyPage;
