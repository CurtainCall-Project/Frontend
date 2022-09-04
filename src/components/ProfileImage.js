import React, { useState } from 'react';
import styled from 'styled-components';

function ProfileImage({ src, size, isBorder = true }) {
  const [isImageScaleUp, setIsImageScaleUp] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setIsImageScaleUp(true)}>
        <Image src={src} size={size} isBorder={isBorder}></Image>
      </Wrapper>
      {isImageScaleUp && (
        <ScaleImageWrapper className="imgWrapper">
          <ScaleImageCloseBtn onClick={() => setIsImageScaleUp(false)}>
            x
          </ScaleImageCloseBtn>
          <ScaleImageInner>
            <img src={src} alt="" />
          </ScaleImageInner>
        </ScaleImageWrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
`;

const ScaleImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #353535;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* text-align: center;
   */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ScaleImageCloseBtn = styled.div`
  color: #fff;
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 30px;
`;

const ScaleImageInner = styled.div`
  width: 40%;
  min-width: 200px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Image = styled.img`
  width: ${(props) => (props.size ? props.size : '20px')};
  height: ${(props) => (props.size ? props.size : '20px')};
  border-radius: 50%;
  border: ${(props) => (props.isBorder ? '0.5px solid ' : 'none')};
  /* margin: 0.25em 0.5em 0 0; */
  background-position: center;
  object-fit: cover;
  object-position: 50% 50%;
  @media ${({ theme }) => theme.device.tablet} {
    width: 16px;
    height: 16px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 1em;
    height: 1em;
    border-radius: 0.6em;
    margin-top: 5px;
  }
`;
export default ProfileImage;
