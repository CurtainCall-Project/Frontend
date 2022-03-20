import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text, Grid } from '../../elements/elements';
import PostBox from '../../components/mypage/PostBox';
import ProfileBox from '../../components/mypage/ProfileBox';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts, addProfileImage } from '../../modules/user';
import { getCookie } from '../../Cookie';

const MyPage = () => {
  const dispatch = useDispatch();
  const isLogin = !!getCookie('token');
  useEffect(() => {
    if (isLogin === true && nickname === null) {
      history.push('/mypage/nickname');
      return;
    }
    dispatch(getUserPosts(userId));
  }, []);

  // 현재 유저의 마이페이지 정보 가져오기
  const { myPost, myScrap } = useSelector((state) => state.user.userPosts);
  // 현재 유저 정보 가져오기
  const { userId, nickname, profileImg } = useSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState(profileImg);
  const [file, setFile] = useState(null);

  // 이미지 파일 선택 시 저장하고, post하기
  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    let reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      dispatch(addProfileImage(file));
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
        handleFileChange={handleFileChange}
      />
      <PostContainer>
        <Grid margin="0 0 15px 0">
          <Text>내가 쓴 글</Text>
          <Text font_size="14px" width="8%" onClick={clickMorePostBtn}>
            더보기 {'>'}
          </Text>
        </Grid>
        {myPost.length > 0 ? (
          <PostBox postInfo={myPost} />
        ) : (
          <Text font_weight="regular">아직 작성한 글이 없어요</Text>
        )}
        <Grid margin="40px 0 15px 0">
          <Text>스크랩</Text>
          <Text font_size="14px" width="8%" onClick={clickMoreScrapBtn}>
            더보기 {'>'}
          </Text>
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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 90px auto 0 auto;
  max-width: 1256px;
`;
const PostContainer = styled.div`
  width: 730px;
`;

export default MyPage;
