import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NicknameButton from '../../components/common/NicknameButton';
import NicknameForm from '../../components/common/NicknameForm';
import { useSelector, useDispatch } from 'react-redux';
import { addNickname, setNickname } from '../../modules/user';

const NicknameSetPage = () => {
  const dispatch = useDispatch();
  const [userNickname, setUserNickname] = useState('');
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const [isUnique, setIsUnique] = useState('');
  const uniqueNickname = useSelector((state) => state.user.isUnique);
  const userId = useSelector((state) => state.user.userId);

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
  const onCheck = () => {
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

  // 닉네임 저장 버튼 클릭
  const onSave = () => {
    if (!userNickname) {
      window.alert('새로운 닉네임을 입력하세요.');
      return;
    }
    if (isUnique) {
      dispatch(addNickname(userNickname, userId));
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

export default NicknameSetPage;
