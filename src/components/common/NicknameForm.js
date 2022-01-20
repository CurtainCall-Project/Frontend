import React, { useState } from 'react';
import styled from 'styled-components';

const NicknameForm = () => {
  const [nickname, setNickname] = useState('');

  const onChange = (e) => {
    console.log(e.target.value);
    setNickname(e.target.value);
  };
  return (
    <>
      <FormContainer>
        <ContentWrapper>
          <GuideText>
            닉네임을 설정해주세요. 최대 8글자까지 설정 가능합니다.
          </GuideText>
          <InputFormWrapper>
            <Title>닉네임</Title>
            <InputWrapper>
              <NicknameInput type="text" maxLength="8" onChange={onChange} />
            </InputWrapper>
            <DuplicationButton>중복확인</DuplicationButton>
          </InputFormWrapper>
        </ContentWrapper>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  width: 623px;
  height: 233px;
  border-radius: 10px;
  color: ${({ theme }) => theme.nicknameFormGray};
  font-size: 18px;
  border: 1px solid;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: inline-block;
  margin-top: 77px;
`;

const GuideText = styled.div`
  text-align: center;
`;

const InputFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Title = styled.div`
  ${({ theme }) => theme.verticalCenter};
`;

const InputWrapper = styled.div`
  border: 1px solid;
  border-radius: 10px;
  width: 249px;
  height: 31px;
  margin: 0 15px;
`;
const NicknameInput = styled.input`
  width: 90%;
  border: none;
  outline: none;
  font-size: 18px;
  margin: 4px 5px;
`;
const DuplicationButton = styled.button`
  width: 99px;
  height: 32px;
  border-radius: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlue};
  opacity: 70%;
  border: none;
`;
export default NicknameForm;
