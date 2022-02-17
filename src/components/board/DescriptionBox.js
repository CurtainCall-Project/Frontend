import React from 'react';
import styled from 'styled-components';

const DescriptonBox = (props) => {
  return (
    <>
      <Box>{props.text}</Box>
    </>
  );
};

const Box = styled.div`
  ${({ theme }) => theme.verticalCenter};
  margin: 50px auto 0 auto;
  border: 1px solid ${({ theme }) => theme.darkGray};
  width: 1000px;
  height: 80px;
  white-space: pre-wrap;
`;

export default DescriptonBox;
