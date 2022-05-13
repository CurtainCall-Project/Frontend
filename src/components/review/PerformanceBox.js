import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import { useSelector } from 'react-redux';
import { getCookie } from '../../Cookie';
import { Text, Button } from '../../elements/elements';

const PerformanceBox = ({ result }) => {
  const isLogin = !!getCookie('token');
  const nickname = useSelector((state) => state.user.nickname);
  const clickReviewButton = () => {
    if (!isLogin) {
      history.push('/signin');
      return;
    }
    if (isLogin === true && nickname === null) {
      history.push('/mypage/nickname');
      return;
    }
    history.push(`/review/write/${result.mt20id}`);
  };

  return (
    <Container key={result.mt20id}>
      <ImageBox src={result.poster} />
      <InfoWrapper>
        <Text>{result.prfnm}</Text>
        <Text font_weight="regular">
          {result.prfpdfrom === result.prfpdto
            ? result.prfpdfrom
            : `${result.prfpdfrom}~${result.prfpdto}`}
        </Text>
        <Wrapper>
          <Text font_weight="regular">{result.fcltynm}</Text>
          <StyledButton onClick={clickReviewButton}>후기 작성하기</StyledButton>
        </Wrapper>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: 65vw;
  height: auto;
  box-shadow: 0 0 0.5em #dedede;
  border-radius: 0.3em;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 1em;
  @media ${({ theme }) => theme.device.tablet} {
    width: 70vw;
  }
`;
const ImageBox = styled.img`
  width: 6.3em;
  height: 7.5em;
  object-fit: cover;
`;
const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  line-height: 2.1em;
  margin-left: 1em;
  @media ${({ theme }) => theme.device.mobile} {
    line-height: 1.2em;
  }
`;
const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  jusitfy-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;
const StyledButton = styled(Button)`
  font-size: 1em;
  width: 9em;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 3px;
    width: 7em;
    height: 2em;
  }
`;
export default PerformanceBox;
