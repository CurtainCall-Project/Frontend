import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NicknameButton from '../components/common/NicknameButton';
import NicknameForm from '../components/common/NicknameForm';
import { addNickname, setNickname } from '../modules/user';

const NicknameContainer = () => {
  const dispatch = useDispatch();
  const [userNickname, setUserNickname] = useState('');
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const [isUnique, setIsUnique] = useState('');
  const uniqueNickname = useSelector((state) => state.user.isUnique);

  useEffect(() => {
    setIsUnique(uniqueNickname);
    isUnique ? setColor('#009429') : setColor('#FF0000');
  }, [uniqueNickname, isUnique]);

  // 닉네임 입력값 저장
  const onChange = (e) => {
    setUserNickname(e.target.value);
  };

  // 닉네임 중복확인 버튼 눌렀을 때, 닉네임 중복여부 확인하는 리듀서 함수 호출
  const onCheck = () => {
    if (!userNickname) {
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
      dispatch(addNickname(userNickname));
    }
  };

  return (
    <>
      <NicknameForm
        clicked={clicked}
        color={color}
        isUnique={isUnique}
        onChange={onChange}
        onCheck={onCheck}
      />
      <NicknameButton onSave={onSave} />
    </>
  );
};

export default NicknameContainer;
