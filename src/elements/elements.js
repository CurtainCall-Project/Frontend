// 최소단위 컴포넌트
import React from 'react';
import styled from 'styled-components';

// 여백(Grid) 최소단위 컴포넌트
const Grid = styled.div`
  border: 1px solid blue;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  display: flex;
  ${(props) => (props.height ? `height: ${props.height};` : '')};
  flex-direction: ${(props) => (props.flex_direction ? 'column' : 'row')};
  justify-content: ${(props) =>
    props.justify_content ? props.justify_content : 'flex-start'};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  align-items: ${(props) =>
    props.flex_direction === 'column' ? 'stretch' : 'center'};
`;

// 텍스트(Text) 최소단위 컴포넌트
const Text = styled.div`
  box-sizing: border-box;
  //border: 1px solid;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
  font-weight: bold;
  color: ${(props) =>
    props.color === 'gray' ? `${({ theme }) => theme.borderGray}` : '#000'};
  ${(props) => (props.margin_left ? `margin-left: ${props.margin_left}` : '')};
  padding-top: ${(props) =>
    props.padding_top ? `${props.padding_top}` : '7px'};
`;

// 입력(Input) 최소단위 컴포넌트
const Input = styled.input`
  box-sizing: border-box;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
  height: 30px;
  border: none;
  outline: none;
  padding-left: 10px;
  border-bottom: 1px solid;
`;

// 텍스트영역(TextArea) 최소단위 컴포넌트
const InputBox = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : '285px')};
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 15px;
  outline: none;
  overflow: auto;
  resize: none;
  &&::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
  }
  &&::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: gray;
  }
`;

// 버튼(Button) 최소단위 컴포넌트
const Button = styled.button`
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.mainBlue};
  color: ${({ theme }) => theme.white};
  width: ${(props) => (props.width ? `${props.width}` : '71px')};
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
`;

// 이미지(Image) 최소단위 컴포넌트
const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
`;

export { Grid, Text, Input, InputBox, Button, Image };
