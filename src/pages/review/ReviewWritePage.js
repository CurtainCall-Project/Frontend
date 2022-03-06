import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReviewWrite from '../../components/review/ReviewWrite';

const ReviewWritePage = () => {
  const [imgFiles, setImgFiles] = useState([]);
  const totalCount = useRef(8);
  const nextId = useRef(1);

  // 이미지 파일 선택 시 이미지를 저장하고, 미리보기를 보여주는 함수
  const selectFiles = (e) => {
    // 선택한 파일 없을 때는 아무것도 실행하지 않는다
    if (!e.target.files.length) {
      return;
    }

    const newFiles = Array.from(e.target.files);
    // 업로드 가능한 파일을 8개로 제한한다.
    if (imgFiles.length + newFiles.length > totalCount.current) {
      window.alert(
        '파일은 최대 ' + totalCount.current + '개까지 업로드할 수 있습니다.'
      );
      return;
    }

    //파일을 미리보기 위해 URL 객체를 생성한다
    const files = newFiles.map((file) => {
      const newfile = {
        id: nextId.current,
        imgFile: file,
        dataUrl: URL.createObjectURL(file),
      };
      nextId.current++;
      return newfile;
    });
    setImgFiles(imgFiles.concat(files));
  };

  // 삭제 버튼 클릭시 미리보기 이미지를 삭제한다
  const deleteFile = (id) => {
    setImgFiles(imgFiles.filter((imgFile) => imgFile.id !== id));
    //console.log(imgFiles);
  };

  return (
    <Wrapper>
      <ReviewWrite
        imgFiles={imgFiles}
        selectFiles={selectFiles}
        deleteFile={deleteFile}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  flex-direction: column;
  margin: 60px auto 0 auto;
`;
export default ReviewWritePage;
