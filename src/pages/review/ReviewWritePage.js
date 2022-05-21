import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ReviewWrite from '../../components/review/ReviewWrite';
import { addReview, editReview, getMusicalDetail } from '../../modules/review';

const ReviewWritePage = (props) => {
  const dispatch = useDispatch();
  const [viewingDate, setViewingDate] = useState(new Date());
  const [casting, setCasting] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [imgFiles, setImgFiles] = useState([]);
  // 기존 후기 글에 저장된 사진 url 상태 관리
  const [savedImages, setSavedImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const totalCount = useRef(8);
  const nextId = useRef(1);

  // 기존 리뷰 글 수정 시 상세 리뷰 정보 가져오기
  const reviewDetail = useSelector((state) => state.review.reviewDetail);
  // 현재 리뷰를 작성할 뮤지컬 id 가져오기
  const musicalId = props.match.params.id;
  // 현재 뮤지컬 id에 해당하는 뮤지컬 정보 가져오기
  const nowMusical = useSelector((state) => state.review.nowMusical);

  useEffect(() => {
    dispatch(getMusicalDetail(musicalId));
  }, []);

  useEffect(() => {
    // 사용자가 리뷰를 작성한 뮤지컬이라면 뮤지컬 정보를 저장하기
    if (
      !(JSON.stringify(reviewDetail) === '{}') &&
      reviewDetail.musical.mt20id === musicalId
    ) {
      setViewingDate(new Date(reviewDetail.viewingDate));
      setCasting(reviewDetail.casting);
      setRating(reviewDetail.rating * 20);
      setContent(reviewDetail.content);
      setSavedImages(reviewDetail.boardImgs);
    }
  }, [reviewDetail]);

  // 리뷰 등록하기
  const submitReview = () => {
    const files = imgFiles.map((imgFile) => imgFile.imgFile);
    if (
      !(JSON.stringify(reviewDetail) === '{}') &&
      reviewDetail.musical.mt20id === musicalId
    ) {
      dispatch(
        editReview(
          reviewDetail.reviewId,
          nowMusical.prfnm,
          musicalId,
          rating,
          viewingDate.toISOString().split('T')[0].replace(/-/g, '.'),
          casting,
          content,
          files,
          deletedImages
        )
      );
      return;
    }
    dispatch(
      addReview(
        nowMusical.prfnm,
        musicalId,
        rating,
        viewingDate.toISOString().split('T')[0].replace(/-/g, '.'),
        casting,
        content,
        files
      )
    );
  };

  // 별점 점수 담기
  const handleRating = (rate) => {
    const calculatedRate = rate / 20;
    setRating(calculatedRate);
  };

  // 이미지 파일 선택 시 이미지를 저장하고, 미리보기를 보여주는 함수
  const selectFiles = (e) => {
    // 선택한 파일 없을 때는 아무것도 실행하지 않는다
    if (!e.target.files.length) {
      return;
    }

    const newFiles = Array.from(e.target.files);
    // 첨부 파일 용량을 10MB로 제한한다.
    if (newFiles.filter((file) => file.size > 10 * 1024 * 1024).length > 0) {
      window.alert('파일 1개의 크기를 10MB 이하로 제한합니다.');
      return;
    }
    // 업로드 가능한 파일을 8개로 제한한다.
    if (
      imgFiles.length + newFiles.length + savedImages.length >
      totalCount.current
    ) {
      window.alert(
        '사진은 최대 ' + totalCount.current + '장까지 업로드할 수 있습니다.'
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
  };

  // 기존의 저장된 이미지 삭제 버튼 클릭시 미리보기 이미지를 삭제한다.
  const deleteSavedImage = (url) => {
    setSavedImages(savedImages.filter((image) => image !== url));
    setDeletedImages(
      deletedImages.concat(savedImages.filter((image) => image === url))
    );
  };

  return (
    <Wrapper>
      <ReviewWrite
        nowMusical={nowMusical}
        viewingDate={viewingDate}
        rating={rating}
        casting={casting}
        content={content}
        imgFiles={imgFiles}
        savedImages={savedImages}
        deletedImages={deletedImages}
        selectFiles={selectFiles}
        deleteFile={deleteFile}
        deleteSavedImage={deleteSavedImage}
        setViewingDate={setViewingDate}
        setCasting={setCasting}
        setContent={setContent}
        setSavedImages={setSavedImages}
        handleRating={handleRating}
        submitReview={submitReview}
        reviewDetail={reviewDetail}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: 80vw;
  max-width: 1000px;
  justify-content: center;
  flex-direction: column;
  margin: 4em auto 0 auto;
`;
export default ReviewWritePage;
