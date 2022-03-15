import React from 'react';
import styled from 'styled-components';

const NicknameForm = ({
  clicked,
  color,
  isUnique,
  onChange,
  onCheck,
  userNickname,
}) => {
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
              <NicknameInput
                type="text"
                maxLength="8"
                onChange={onChange}
                value={userNickname}
              />
            </InputWrapper>
            <DuplicationButton onClick={onCheck}>중복확인</DuplicationButton>
            <NicknameCheckText>
              {clicked &&
                (isUnique ? (
                  <span style={{ color: color }}>사용가능한 닉네임입니다.</span>
                ) : (
                  <span style={{ color: color }}>중복된 닉네임입니다.</span>
                ))}
            </NicknameCheckText>
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
  color: ${({ theme }) => theme.borderGray};
  font-size: 18px;
  border: 1px solid;
  margin: 0px auto 30px auto;
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
  position: relative;
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
  cursor: pointer;
`;
const NicknameCheckText = styled.div`
  position: absolute;
  top: 40px;
  left: 162px;
  font-size: 14px;
`;
export default NicknameForm;
