// 최소단위 컴포넌트
import React from 'react';
import styled from 'styled-components';

// 여백(Grid) 최소단위 컴포넌트
const Grid = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  display: ${(props) => (props.display ? `${props.display}` : 'flex')};
  ${(props) => (props.height ? `height: ${props.height};` : '')};
  flex-direction: ${(props) => (props.flex_direction ? 'column' : 'row')};
  justify-content: ${(props) =>
    props.justify_content ? props.justify_content : 'flex-start'};
  ${(props) => (props.line_height ? `line-height: ${props.line_height};` : '')};

  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.margin_left ? `margin: ${props.margin_left};` : '')};
  align-items: ${(props) =>
    props.flex_direction === 'column' ? 'stretch' : 'center'};
`;

// 텍스트(Text) 최소단위 컴포넌트
const Text = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  font-size: ${(props) =>
    props.font_size ? `${props.font_size / 16}em` : '1em'};
  font-weight: ${(props) =>
    props.font_weight ? `${props.font_weight}` : 'bold'};
  color: ${(props) =>
    props.color === 'gray'
      ? `${({ theme }) => theme.colors.borderGray}`
      : '#000'};
  ${(props) => (props.margin_left ? `margin-left: ${props.margin_left}` : '')};
  ${(props) =>
    props.margin_bottom ? `margin-bottom ${props.margin_bottom}` : ''};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
  padding-top: ${(props) =>
    props.padding_top ? `${props.padding_top}` : '7px'};
  white-space: pre-wrap;
  ${(props) => (props.float ? `float: ${props.float};` : '')}
  ${(props) => (props.line_height ? `line-height: ${props.line_height};` : '')}
  ${(props) => (props.text_align ? `text-align: ${props.text_align};` : '')}
`;

// 입력(Input) 최소단위 컴포넌트
const Input = styled.input`
  box-sizing: border-box;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  font-size: 1em;
  height: 2em;
  border: none;
  outline: none;
  padding-left: 1em;
  border-bottom: 1px solid;
`;

// 텍스트영역(TextArea) 최소단위 컴포넌트
const InputBox = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : '17em')};
  font-size: 1em;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 0.5em;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 1em;
  outline: none;
  overflow: auto;
  resize: none;
  &&::-webkit-scrollbar {
    width: 0.4em;
    border-radius: 6px;
  }
  &&::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.borderGray};
  }
`;

// 버튼(Button) 최소단위 컴포넌트
const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  width: ${(props) => (props.width ? `${props.width}` : '4.5em')};
  height: ${(props) => (props.height ? `${props.height}` : '2em')};
  font-size: 1em;
  cursor: pointer;
`;

// 이미지(Image) 최소단위 컴포넌트
const Image = styled.img`
  width: 11em;
  height: 11em;
  border-radius: 10px;
`;

export { Grid, Text, Input, InputBox, Button, Image };
