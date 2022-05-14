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
            <NicknameCheckText>
              {clicked &&
                (isUnique ? (
                  <span style={{ color: color }}>사용가능한 닉네임입니다.</span>
                ) : (
                  <span style={{ color: color }}>중복된 닉네임입니다.</span>
                ))}
            </NicknameCheckText>
          </InputWrapper>
          <DuplicationButton onClick={onCheck}>중복확인</DuplicationButton>
        </InputFormWrapper>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  box-sizing: border-box;
  width: 623px;
  height: auto;
  padding: 5em 3em;
  border-radius: 0.6em;
  color: ${({ theme }) => theme.colors.borderGray};
  border: 1px solid;
  margin: 0px auto 2em auto;
  @media ${({ theme }) => theme.device.tablet} {
    width: 70vw;
    padding 3em 1.5em;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 3em 1.5em;
    width: 80vw;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
const GuideText = styled.div`
  text-align: center;
`;
const InputFormWrapper = styled.div`
  ${({ theme }) => theme.verticalCenter}
  justify-content: center;
  margin-top: 2em;
`;
const Title = styled.div`
  ${({ theme }) => theme.verticalCenter};
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
const InputWrapper = styled.div`
  border: 1px solid;
  border-radius: 0.5em;
  width: 14em;
  height: 2em;
  margin: 0 1em;
  position: relative;
  ${({ theme }) => theme.verticalCenter};
  @media ${({ theme }) => theme.device.mobile} {
    margin: 0 0.5em 0 0;
  }
`;
const NicknameInput = styled.input`
  width: 70%;
  height: 1em;
  border: none;
  outline: none;
  margin: 0.5em;
  font-size: 1em;
`;
const DuplicationButton = styled.button`
  width: 6em;
  height: 2em;
  border-radius: 0.5em;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};
  opacity: 70%;
  border: none;
  cursor: pointer;
`;
const NicknameCheckText = styled.div`
  margin-left: 9em;
  position: absolute;
  top: 3em;
  left: -8em;
  font-size: ${({ theme }) => theme.fontSize.sm};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    top: 3.5em;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export default NicknameForm;
