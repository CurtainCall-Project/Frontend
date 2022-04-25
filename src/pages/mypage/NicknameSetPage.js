import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NicknameButton from '../../components/mypage/NicknameButton';
import NicknameForm from '../../components/mypage/NicknameForm';
import { Text } from '../../elements/elements';
import { useSelector, useDispatch } from 'react-redux';
import { addNickname, setNickname } from '../../modules/user';

const NicknameSetPage = () => {
  const dispatch = useDispatch();
  const [userNickname, setUserNickname] = useState('');
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const [isUnique, setIsUnique] = useState('');
  const [check, setCheck] = useState(false);
  const uniqueNickname = useSelector((state) => state.user.isUnique);

  // 닉네임 정보 가져오기
  const nickname = useSelector((state) => state.user.nickname);
  useEffect(() => {
    // 이미 닉네임이 저장되어 있는 경우 저장된 닉네임으로 상태 변경
    if (nickname) {
      setUserNickname(nickname);
    }
  }, [nickname]);

  useEffect(() => {
    setIsUnique(uniqueNickname);
    isUnique ? setColor('#009429') : setColor('#FF0000');
  }, [uniqueNickname, isUnique]);

  // 닉네임 입력값 저장
  const onChange = (e) => {
    e.preventDefault();
    setUserNickname(e.target.value);
  };

  // 닉네임 중복확인 버튼 눌렀을 때, 닉네임 중복여부 확인하는 리듀서 함수 호출
  const onCheck = (e) => {
    e.preventDefault();
    if (!userNickname) {
      window.alert('새로운 닉네임을 입력하세요.');
      return;
    }
    if (nickname && nickname === userNickname) {
      window.alert('새로운 닉네임을 입력하세요.');
      return;
    }
    dispatch(setNickname(userNickname));
    setClicked(true);
  };

  // 이용약관 체크 상태 변경
  const handleCheckBox = (e) => {
    setCheck(!check);
  };

  // 닉네임 저장 버튼 클릭
  const onSave = (e) => {
    e.preventDefault();
    if (!userNickname) {
      window.alert('새로운 닉네임을 입력하세요.');
      return;
    }
    if (!!nickname === false && check === false) {
      window.alert('이용약관에 동의해주세요.');
      return;
    }
    if (isUnique) {
      dispatch(addNickname(userNickname));
    }
  };

  return (
    <Wrapper>
      <NicknameForm
        clicked={clicked}
        color={color}
        isUnique={isUnique}
        onChange={onChange}
        onCheck={onCheck}
        userNickname={userNickname}
      />
      {!!nickname === false && (
        <AcceptBox>
          <input type="checkbox" onClick={handleCheckBox} />
          <Text width="auto" margin_left="5px">
            회원가입 시
            <a href="https://www.notion.so/3315a2035ee74966ad28c84695fa2161">
              {' '}
              이용약관
            </a>
            에 동의합니다
          </Text>
        </AcceptBox>
      )}
      <NicknameButton onSave={onSave} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 623px;
  ${({ theme }) => theme.verticalCenter};
  flex-direction: column;
  margin: 110px auto 0 auto;
`;

const AcceptBox = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  a {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
export default NicknameSetPage;
