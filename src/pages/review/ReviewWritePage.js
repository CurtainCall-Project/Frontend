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
  const totalCount = useRef(8);
  const nextId = useRef(1);

  // 기존 리뷰 글 수정 시 상세 리뷰 정보 가져오기
  const reviewDetail = useSelector((state) => state.review.reviewDetail);
  console.log(reviewDetail);
  // 현재 로그인한 사용자 id 가져오기
  const userId = useSelector((state) => state.user.userId);
  // 현재 리뷰를 작성할 뮤지컬 id 가져오기
  const musicalId = props.match.params.id;
  // 뮤지컬 검색 결과 리스트 가져오기
  const results = useSelector((state) => state.review.searchResults);
  console.log(results);
  // // musicalId와 동일한 id를 갖는 뮤지컬 정보 가져오기
  // const nowMusical = results.filter(
  //   (result) => String(result.mt20id) === musicalId
  // )[0];
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
      console.log('뮤지컬 id는 ' + reviewDetail.musical.mt20id + musicalId);
      setViewingDate(new Date(reviewDetail.viewingDate));
      setCasting(reviewDetail.casting);
      setRating(reviewDetail.rating * 20);
      setContent(reviewDetail.content);
    }
  }, [reviewDetail]);

  // 리뷰 등록하기
  const submitReview = () => {
    console.log('등록');
    const files = imgFiles.map((imgFile) => imgFile.imgFile);
    if (
      !(JSON.stringify(reviewDetail) === '{}') &&
      reviewDetail.musical.mt20id === musicalId
    ) {
      dispatch(
        editReview(
          nowMusical.prfnm,
          musicalId,
          userId,
          rating,
          viewingDate.toISOString().split('T')[0].replace(/-/g, '.'),
          casting,
          content,
          files
        )
      );
      return;
    }
    dispatch(
      addReview(
        nowMusical.prfnm,
        musicalId,
        userId,
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
        nowMusical={nowMusical}
        viewingDate={viewingDate}
        rating={rating}
        casting={casting}
        content={content}
        imgFiles={imgFiles}
        selectFiles={selectFiles}
        deleteFile={deleteFile}
        setViewingDate={setViewingDate}
        setCasting={setCasting}
        setContent={setContent}
        handleRating={handleRating}
        submitReview={submitReview}
        reviewDetail={reviewDetail}
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
